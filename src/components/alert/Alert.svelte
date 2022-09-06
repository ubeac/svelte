<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component, onDestroy, onMount } from 'svelte/internal'

	import type { Alert } from 'bootstrap'

	import { Icon } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	import { AlertTitle } from '.'
	import type { AlertVariants } from './alert.types'

	/**
	 * Set Alert's color
	 */
	export let color: Colors = 'default'

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
	 * Title of Alert
	 */
	export let title: string | undefined = undefined

	/**
	 * Set Alert's variant
	 */
	export let variant: AlertVariants = 'outlined'

	const dispatch = createEventDispatcher()

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let instance: Alert
	let ref: HTMLElement
	let timer: any

	$: classes = classname(
		'alert',
		{
			dismissible,
			color,
			variant,
		},
		['fade', open ? 'show' : 'd-none', $$props.class],
		true
	)

	function close() {
		instance && instance.close()
		dispatch('close')
	}

	onMount(() => {
		import('bootstrap').then(({ Alert }) => {
			instance = new Alert(ref)
			if (duration >= 0) timer = setTimeout(close, duration)
		})
	})

	onDestroy(() => {
		clearTimeout(timer)
		instance && instance.dispose()
	})
</script>

{#if condition($$props)}
	<div bind:this={ref} use:forwardEvents {...$$restProps} class={classes}>
		<!-- <div class={classname('alert-body')}> -->
		{#if $$slots['icon'] || icon}
			<div class={classname('alert-icon')}>
				{#if icon}
					<Icon name={icon} />
				{:else}
					<slot name="icon" />
				{/if}
			</div>
		{:else if $$slots['start']}
			<div class={classname('alert-start')}>
				<slot name="start" />
			</div>
		{/if}

		<div>
			{#if title}
				<AlertTitle>
					{title}
				</AlertTitle>
			{/if}
			<slot />
		</div>
		<!-- </div> -->
		{#if dismissible}
			<button type="button" on:click={close} class={classname('alert-close')} aria-label="close" />
		{/if}
	</div>
{/if}
