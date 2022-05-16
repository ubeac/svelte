<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * TODO
	 */
	export let alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' = 'stretch'

	$: classes = {
		[`align-items-${alignItems}`]: true,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="Grid" {...$$restProps}>
	<slot />
</Root>