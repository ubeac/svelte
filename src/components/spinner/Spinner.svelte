<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	$: classes = {
		[`$text-${color}`]: !!color,
	}

	$: classesName = ['size', 'style']
</script>

<Root
	element="div"
	{classes}
	{classesName}
	component={get_current_component()}
	componentName="Spinner"
	role="status"
	{...$$restProps} />
