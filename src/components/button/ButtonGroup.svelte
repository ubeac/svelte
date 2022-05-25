<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * Size of buttons
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	/**
	 * Align Buttons vertically
	 */
	export let vertical: boolean = false

	$: classes = {
		horizontal: !vertical,
		size,
		vertical,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="ButtonGroup" {...$$restProps}>
	<slot />
</Root>
