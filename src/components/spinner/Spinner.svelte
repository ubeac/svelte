<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'
	import { condition } from '@app/utils'

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	/**
	 * TODO
	 */
	export let size: 'sm' | 'md' = 'sm'

	/**
	 * TODO
	 */
	export let style: 'border' | 'grow' = 'border'

	$: classes = {
		size,
		style,
		[`$text-${color}`]: !!color,
	}
</script>

{#if condition($$props)}
	<Root
		element="div"
		{classes}
		component={get_current_component()}
		componentName="Spinner"
		role="status"
		{...$$restProps} />
{/if}

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
