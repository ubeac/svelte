<script lang="ts">
	import { get_current_component, onMount } from 'svelte/internal'

	import type { Alert } from 'bootstrap'

	import { Icon } from '../icon'
	import { Root } from '../root'
	import AlertClose from './AlertClose.svelte'

	/**
	 * Show close button at the end of alert
	 */
	export let dismissible: boolean = false

	/**
	 * Set a timeout to close Alert automatically
	 */
	export let duration: number | false = false

	/**
	 * Set an Icon at the start side of alert
	 */
	export let icon: string = ''

	/**
	 * Control open/close state of Alert
	 */
	export let open: boolean = true

	/**
	 * Set Alert type
	 */
	export let type: 'error' | 'info' | 'success' | 'warning' = 'info'

	let el: HTMLDivElement
	let instance: Alert

	onMount(() => {
		import('bootstrap').then(({ Alert }) => {
			console.log({ el, document })
			instance = new Alert(el)
			if (duration) {
				setTimeout(closeAlert, duration)
			}
		})
	})

	function closeAlert() {
		instance.close()
	}

	$: classes = {
		type,
		dismissible,
	}
</script>

{#if open}
	<Root
		bind:el
		element="div"
		class="show fade"
		{classes}
		component={get_current_component()}
		componentName="Alert"
		{...$$restProps}>
		<div class="d-flex">
			{#if $$slots['icon'] || icon}
				<div class="alert-icon">
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
			<AlertClose on:close={closeAlert} on:close />
		{/if}
		{#if $$slots['actions']}
			<div class="btn-list">
				<slot name="actions" />
			</div>
		{/if}
	</Root>
{/if}
