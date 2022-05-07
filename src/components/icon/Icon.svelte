<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import Icon from '@iconify/svelte'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

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

	$: classes = {
		[`$text-${color}`]: !!color,
	}

	$: classesName = ['size']
</script>

<Root
	element={Icon}
	{classes}
	{classesName}
	component={get_current_component()}
	componentName="Icon"
	icon="{pack}:{name}"
	{...$$restProps} />
