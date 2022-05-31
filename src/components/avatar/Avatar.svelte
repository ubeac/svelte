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
	export let shape: 'circle' | 'round' | 'square' = 'round'

	/**
	 * Set size of Avatar
	 */
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'

	$: classes = {
		color,
		shape,
		size,
		// TODO
		// [`bg-${color}-lt`]: !!color,
		// [`avatar-${size}`]: !!size,
		// 'rounded': shape === 'rounded',
		// 'rounded-circle': shape === 'circle',
		// 'rounded-0': shape === 'square',
	}
</script>

<!-- TODO -->
<!-- style="background-image: url({src})" -->
<Root element="span" {classes} component={get_current_component()} componentName="Avatar" {...$$restProps}>
	<slot />
</Root>
