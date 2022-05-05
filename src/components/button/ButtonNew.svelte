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
	export let outline: boolean = false

	$: classes = {
		color: !outline && color,
		[`outline-${color}`]: !!(outline && color),
	}

	$: classesName = ['block', 'disabled', 'loading', 'size']
</script>

{#if condition($$props)}
	<Root
		element="button"
		{classes}
		{classesName}
		component={get_current_component()}
		componentName="Button"
		{...$$restProps}>
		<slot />
	</Root>
{/if}

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
