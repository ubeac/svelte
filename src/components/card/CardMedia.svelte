<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * You can change border radius of Media using placement property
	 */
	export let placement: 'top' | 'start' | 'middle' | 'end' | 'bottom' = 'middle'

	$: classes = {
		placement,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="CardMedia" {...$$restProps}>
	<slot />
</Root>
