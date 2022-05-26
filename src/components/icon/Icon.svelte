<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import Icon from '@iconify/svelte'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

	/**
	 * Set color of the Icon
	 */
	export let color: Colors = undefined

	/**
	 * Name of the Icon, see https://icon-sets.iconify.design/ for list of icon names and packs
	 */
	export let name: string | undefined = undefined

	/**
	 * Change Icons package, see https://icon-sets.iconify.design/ for list of icon packs
	 */
	export let pack: 'tabler' = 'tabler'

	/**
	 * Set Size of the Icon
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

<Root
	element={Icon}
	{classes}
	component={get_current_component()}
	componentName="Icon"
	icon="{pack}:{name}"
	{...$$restProps} />
