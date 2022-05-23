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
	export let flat: boolean = false

	/**
	 * TODO
	 */
	export let href: undefined | string = undefined

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

	/**
	 * TODO
	 */
	export let text: boolean = false

	/**
	 * TODO
	 */
	export let tile: boolean = false

	$: classes = {
		block,
		[color || '']: true,
		disabled,
		flat,
		loading,
		outline,
		size,
		text,
		tile,
	}
</script>

<Root
	element={href ? 'a' : 'button'}
	{classes}
	component={get_current_component()}
	componentName="Button"
	{href}
	{...$$restProps}>
	<slot />
</Root>
