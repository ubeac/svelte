<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * TODO
	 */
	export let xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'grow' = 'auto'

	$: classes = {
		[`xs-${xs}`]: true,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="GridItem" {...$$restProps}>
	<slot />
</Root>
