<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

	/**
	 * TODO
	 */
	export let block: boolean = false

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	/**
	 * TODO
	 */
	export let disabled: boolean = false

	/**
	 * TODO
	 */
	export let loading: boolean = false

	/**
	 * TODO
	 */
	export let outline: boolean = false

	/**
	 * TODO
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	$: classes = {
		block,
		color: !outline && color,
		disabled,
		loading,
		[`outline-${color}`]: !!(outline && color),
		size,
	}
</script>

<Root element="button" {classes} component={get_current_component()} componentName="Button" {...$$restProps}>
	<slot />
</Root>
