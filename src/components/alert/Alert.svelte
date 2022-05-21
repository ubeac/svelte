<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '../root'

	/**
	 * Show close button at the end of alert
	 */
	export let dismissible: boolean = false

	/**
	 * Set Alert state
	 */
	export let type: 'error' | 'info' | 'success' | 'warning' = 'info'

	$: classes = {
		type,
		dismissible,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="Alert" {...$$restProps}>
	<slot />
</Root>
