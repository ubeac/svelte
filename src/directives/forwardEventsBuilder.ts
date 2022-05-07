import type { SvelteComponent } from 'svelte'
import { bubble, listen, prevent_default, stop_propagation } from 'svelte/internal'

type EventCallback = (event: any) => void

type EventDestructor = () => void

const regex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/

export const forwardEventsBuilder = (component: SvelteComponent) => {
	let $on: (eventType: string, callback: EventCallback) => EventDestructor

	const events: [string, EventCallback][] = []

	const forward = (event: Event) => bubble(component, event)

	component.$on = (eventType: string, callback: EventCallback) => {
		if ($on) return $on(eventType, callback)
		events.push([eventType, callback])
		return () => {}
	}

	return (node: HTMLElement | SVGElement) => {
		const destructors: EventDestructor[] = []

		const forwards: { [k: string]: EventDestructor } = {}

		$on = (eventType: string, callback: EventCallback) => {
			let options: AddEventListenerOptions | boolean = false

			if (eventType.match(regex)) {
				const parts = eventType.split(':')

				eventType = parts[0]

				const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]))

				if (eventOptions.passive) {
					options = options || {}
					options.passive = true
				}

				if (eventOptions.nonpassive) {
					options = options || {}
					options.passive = false
				}

				if (eventOptions.capture) {
					options = options || {}
					options.capture = true
				}

				if (eventOptions.once) {
					options = options || {}
					options.once = true
				}

				if (eventOptions.preventDefault) {
					callback = prevent_default(callback)
				}

				if (eventOptions.stopPropagation) {
					callback = stop_propagation(callback)
				}
			}

			const off = listen(node, eventType, callback, options)

			const destructor = () => {
				off()
				const index = destructors.indexOf(destructor)
				if (index == -1) return
				destructors.splice(index, 1)
			}

			destructors.push(destructor)

			if (!(eventType in forwards)) forwards[eventType] = listen(node, eventType, forward)

			return destructor
		}

		for (const event of events) $on(event[0], event[1])

		const destroy = () =>
			Object.values(forwards)
				.concat(destructors)
				.forEach((destructor) => destructor())

		return { destroy }
	}
}
