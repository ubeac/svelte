<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * Align Buttons vertically
	 */
	export let vertical: boolean = false

	/**
	 * Size of buttons
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	$: classes = {
		vertical,
		size,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="ButtonGroup" {...$$restProps}>
	<slot />
</Root>
