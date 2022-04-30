<script lang="ts">
	import clsx from 'clsx'

	import type { Colors } from '../../types'
	import { El } from '../el'

	/**
	 * TODO
	 */
	export let block: boolean = false

	/**
	 * TODO
	 */
	let klass: string | undefined = undefined
	export { klass as class }

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

	$: classes = clsx(
		'u-button',
		{
			[`u-button-block`]: block,
			[`u-button-disabled`]: disabled,
			[`u-button-loading`]: loading,
			[`u-button-${color}`]: !outline && color,
			[`u-button-outline-${color}`]: outline && color,
			[`u-button-${size}`]: size,
		},
		klass
	)
</script>

<El tag="button" class={classes} {disabled} on:click {...$$restProps}>
	<slot />
</El>

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
