<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * If you want to set Card footer's color same as card's body, use the transparent property
	 */
	export let transparent: boolean = false

	$: classes = {
		transparent,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="CardFooter" {...$$restProps}>
	<slot />
</Root>
