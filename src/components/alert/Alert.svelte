<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component, onDestroy, onMount } from 'svelte/internal'

	import type { Alert } from 'bootstrap'

	import { classname } from '@app/utils'

	import { Icon } from '../icon'
	import { Root } from '../root'

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
	 * Set Alert type
	 */
	export let type: 'error' | 'info' | 'success' | 'warning' | undefined = undefined

	/**
	 * TODO
	 */
	export let variant: 'outlined' | 'filled' | undefined = undefined

	const dispatch = createEventDispatcher()

	let instance: Alert
	let ref: HTMLElement

	function close() {
		instance?.close()
		dispatch('close')
	}

	onMount(() => {
		import('bootstrap').then(({ Alert }) => {
			instance = new Alert(ref)
			if (duration >= 0) setTimeout(close, duration)
		})
	})

	onDestroy(() => {
		instance?.dispose()
	})

	$: classes = {
		dismissible,
		type,
		variant,
		$$fade: true,
		$$show: true,
	}
</script>

{#if open}
	<Root bind:ref element="div" {classes} component={get_current_component()} componentName="Alert" {...$$restProps}>
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
	</Root>
{/if}
