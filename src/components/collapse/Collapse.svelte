<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import type { Collapse } from 'bootstrap'
	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Unique id of collapse
	 */
	export let id: string = nanoid()

	/**
	 * Controls open/close state of Collapse
	 */
	export let open = false

	/**
	 * Id of parent Element, if more than one Collapse is related together
	 */
	export let group: string | undefined = undefined

	let element: HTMLDivElement
	let instance: Collapse

	const dispatch = createEventDispatcher()

	function onShow(e: any) {
		dispatch('changed', true)
	}

	function onHide(e: any) {
		dispatch('changed', false)
	}

	onMount(() => {
		element.addEventListener('show.bs.collapse', onShow)
		element.addEventListener('hide.bs.collapse', onHide)

		import('bootstrap').then(({ Collapse }) => {
			instance = new Collapse(element, {
				toggle: false,
			})
		})
	})

	onDestroy(() => {
		element?.removeEventListener('show.bs.collapse', onShow)
		element?.removeEventListener('hide.bs.collapse', onHide)

		instance?.dispose()
	})

	$: {
		if (instance)
			if (open) {
				instance.show()
			} else {
				instance.hide()
			}
	}

	$: classes = classname('collapse', {}, { collapse: true, show: open, class: $$props.class })
</script>

{#if condition($$props)}
	<div
		bind:this={element}
		{...$$restProps}
		use:forwardEvents
		id="collapse-{id}"
		class={classes}
		data-bs-parent={group ? `#${group}` : null}
		aria-labelledby="#collapse-{id}-toggler">
		<slot />
	</div>
{/if}
