<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import Icon from '@iconify/svelte'

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
	export let name: string | undefined = undefined

	/**
	 * TODO
	 */
	export let pack: 'tabler' = 'tabler'

	/**
	 * TODO
	 */
	export let size:
		| 'auto'
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '1x'
		| '2x'
		| '3x'
		| '4x'
		| '5x'
		| '6x'
		| '7x'
		| '8x'
		| '9x' = 'auto'

	$: classes = {
		size,
		[`$text-${color}`]: !!color,
	}
</script>

{#if condition($$props)}
	<Root
		element={Icon}
		{classes}
		component={get_current_component()}
		componentName="Icon"
		icon="{pack}:{name}"
		{...$$restProps} />
{/if}

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
