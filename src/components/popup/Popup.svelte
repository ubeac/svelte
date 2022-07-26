<script lang="ts">
	import { get_current_component, onDestroy, onMount } from 'svelte/internal'

	import { createPopper } from '@popperjs/core'
	import type { Instance, Placement } from '@popperjs/core'

	import { forwardEventsBuilder } from '$lib/directives'
	import { condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let disabled: boolean = false

	/**
	 * TODO
	 */
	export let fixed: boolean = false

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let offset: [number, number] = [0, 8]

	/**
	 * TODO
	 */
	export let placement: Placement = 'auto'

	/**
	 * TODO
	 */
	export let trigger: Array<'click' | 'focus' | 'hover'> = ['focus', 'hover']

	let instance: Instance
	let ref: HTMLElement

	$: options = {
		placement,
		strategy: fixed ? 'fixed' : 'absolute',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset,
				},
			},
		],
	}

	$: options && rebind()

	function eventsName() {
		const events = []

		if (trigger.includes('click')) events.push(['blur', 'click'])

		if (trigger.includes('focus')) events.push(['blur', 'focus'])

		if (trigger.includes('hover')) events.push(['mouseleave', 'mouseenter'])

		return events
	}

	function bind() {
		if (disabled) return
		eventsName().map(([hide, show]) => {
			ref?.previousElementSibling?.addEventListener(hide, onHide)
			ref?.previousElementSibling?.addEventListener(show, onShow)
		})
	}

	function unbind() {
		eventsName().map(([hide, show]) => {
			ref?.previousElementSibling?.removeEventListener(hide, onHide)
			ref?.previousElementSibling?.removeEventListener(show, onShow)
		})
	}

	function rebind() {
		bind()
		unbind()
	}

	function onHide() {
		instance?.destroy()
		ref.setAttribute('hidden', '')
	}

	function onShow() {
		instance = createPopper(ref?.previousElementSibling!, ref, options as any)
		ref.removeAttribute('hidden')
	}

	onMount(bind)

	onDestroy(unbind)
</script>

{#if condition($$props)}
	<div bind:this={ref} use:forwardEvents {...$$restProps}>
		<slot />
	</div>
{/if}
