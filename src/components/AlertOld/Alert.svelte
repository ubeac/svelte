<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component, onDestroy, onMount } from 'svelte/internal'

	// import type { Alert } from 'bootstrap'
	import { Icon } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import type { AlertVariants } from './alert.types'

	/**
	 * Show close button at the end of alert
	 */
	export let dismissible: boolean = false

	/**
	 * Set a timeout to close Alert automatically
	 */
	export let duration: number = -1

	/**
	 * Set an Icon at the start side of alert
	 */
	export let icon: string | undefined = undefined

	/**
	 * Control open/close state of Alert
	 */
	export let open: boolean = true

	/**
	 * Set Alert's color
	 */
	export let type: Colors = 'default'

	/**
	 * Set Alert's variant
	 */
	export let variant: AlertVariants = 'outlined'

	const dispatch = createEventDispatcher()

	// const forwardEvents = forwardEventsBuilder(get_current_component())

	// let instance: Alert
	// let ref: HTMLElement

	$: classes = classname(
		'alert',
		{
			dismissible,
			type,
			variant,
		},
		['fade', 'show', $$props.class],
		true
	)

	function close() {
		// instance && instance.close()
		dispatch('close')
	}

	// onMount(() => {
	// 	import('bootstrap').then(({ Alert }) => {
	// 		instance = new Alert(ref)
	// 		if (duration >= 0) setTimeout(close, duration)
	// 	})
	// })

	// onDestroy(() => {
	// 	instance && instance.dispose()
	// })
</script>

{#if open}
	<div {...$$restProps} class={classes}>
		<div class={classname('alert-body')}>
			{#if $$slots['icon'] || icon}
				<div class={classname('alert-icon')}>
					{#if icon}
						<Icon name={icon} />
					{:else}
						<slot name="icon" />
					{/if}
				</div>
			{/if}
			<div>
				<slot />
			</div>
		</div>
		{#if dismissible}
			<button type="button" on:click={close} class={classname('alert-close')} aria-label="close" />
		{/if}
		{#if $$slots['actions']}
			<div class={classname('alert-actions')}>
				<slot name="actions" />
			</div>
		{/if}
	</div>
{/if}
