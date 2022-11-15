import type { ComponentType, SvelteComponent } from 'svelte'

import El from './El.svelte'
import type { ElInternal } from './El.type'
import { forwardEventsBuilder } from './forwardEventsBuilder'

export function ElBuilder<
	T extends keyof HTMLElementTagNameMap = 'div',
	C extends ComponentType<SvelteComponent> = ComponentType<SvelteComponent>
>(props: Partial<ElInternal<T, C>>): C {
	return new Proxy(El, {
		construct: function (target, args) {
			Object.assign(args[0].props, props.props)

			const instance = new target(...args)

			instance.$set({ forwardEvents: forwardEventsBuilder(instance) })

			return instance
		},
		get: function (target, prop) {
			return (target as any)[prop]
		}
	}) as unknown as C
}
