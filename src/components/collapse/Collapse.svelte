<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import type { Collapse } from 'bootstrap'
	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Forward all native events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Id of parent Element, if more than one Collapse is related together
	 */
	export let group: string | undefined = undefined

	/**
	 * Unique id of collapse
	 */
	export let id: string = nanoid()

	/**
	 * Controls open/close state of Collapse
	 */
	export let open: boolean = false

	const dispatch = createEventDispatcher()

	let element: HTMLDivElement

	let instance: Collapse

	$: {
		if (instance)
			if (open) {
				instance.show()
			} else {
				instance.hide()
			}
	}

	$: classes = classname('collapse', undefined, { collapse: true, show: open, class: $$props.class })

	$: rebind({ group })

	function bind() {
		import('bootstrap').then(({ Collapse }) => {
			instance = new Collapse(element, {
				toggle: false,
				parent: group,
			})
		})
	}

	function unbind() {
		instance?.dispose()
	}

	function rebind(dependencies?: any) {
		if (!element) return
		unbind()
		bind()
	}

	function onHide() {
		dispatch('changed', false)
	}

	function onShow() {
		dispatch('changed', true)
	}

	onMount(() => {
		element.addEventListener('show.bs.collapse', onShow)
		element.addEventListener('hide.bs.collapse', onHide)
		bind()
	})

	onDestroy(() => {
		element?.removeEventListener('show.bs.collapse', onShow)
		element?.removeEventListener('hide.bs.collapse', onHide)
		unbind()
	})
</script>

<div
	aria-labelledby="#collapse-{id}-toggler"
	bind:this={element}
	id="collapse-{id}"
	use:forwardEvents
	{...$$restProps}
	class={classes}>
	<slot />
</div>
