<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * TODO
	 */
	export let transparent: boolean = false

	$: classes = {
		transparent,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="CardFooter" {...$$restProps}>
	<slot />
</Root>
