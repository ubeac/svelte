<script lang="ts">
	import { get_current_component, onMount } from 'svelte/internal'

	import type { Alert } from 'bootstrap'

	import { Root } from '../root'
	import AlertClose from './AlertClose.svelte'

	/**
	 * Show close button at the end of alert
	 */
	export let dismissible: boolean = false

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
		})
	})

	function onClose() {
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
			{#if $$slots['icon']}
				<div class="alert-icon">
					<slot name="icon" />
				</div>
			{/if}
			<div>
				<slot />
			</div>
		</div>
		{#if dismissible}
			<AlertClose on:close={onClose} on:close />
		{/if}
		{#if $$slots['actions']}
			<div class="btn-list">
				<slot name="actions" />
			</div>
		{/if}
	</Root>
{/if}
