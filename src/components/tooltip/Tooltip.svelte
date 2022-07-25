<script lang="ts">
	import { get_current_component, onDestroy, onMount } from 'svelte/internal'

	import { createPopper } from '@popperjs/core'
	import type { Instance, Placement } from '@popperjs/core'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let disabled: boolean = false

	/**
	 * TODO
	 */
	export let fixed: boolean = false

	/**
	 * TODO
	 */
	export let placement: Placement = 'auto'

	/**
	 * TODO
	 */
	export let trigger: Array<'click' | 'focus' | 'hover'> = ['focus', 'hover']

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let instance: Instance
	let ref: HTMLElement

	$: classes = classname('tooltip', undefined, $$props.class)

	$: options = {
		placement,
		strategy: fixed ? 'fixed' : 'absolute',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 8],
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
		ref.classList.remove(classname('tooltip-show')!)
	}

	function onShow() {
		instance = createPopper(ref?.previousElementSibling!, ref, options as any)
		ref.classList.add(classname('tooltip-show')!)
	}

	onMount(bind)

	onDestroy(unbind)
</script>

{#if condition($$props)}
	<div bind:this={ref} use:forwardEvents {...$$restProps} class={classes}>
		<div class={classname('tooltip-arrow')} data-popper-arrow />
		<slot />
	</div>
{/if}
