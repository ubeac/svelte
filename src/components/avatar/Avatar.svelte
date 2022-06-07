<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Icon, Root } from '@app/components'
	import type { Colors } from '@app/types'

	/**
	 * Set color of Avatar
	 */
	export let color: Colors = undefined

	/**
	 * Set shape of Avatar
	 */
	export let shape: 'circle' | 'round' | 'tile' = 'round'

	/**
	 * Set size of Avatar
	 */
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'

	$: classes = {
		color,
		shape,
		size,
	}
</script>

<Root element="span" {classes} component={get_current_component()} componentName="Avatar" {...$$restProps}>
	<slot />
</Root>
