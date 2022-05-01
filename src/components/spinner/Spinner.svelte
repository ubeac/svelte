<script lang="ts">
	import clsx from 'clsx'

	import type { Colors } from '../../types'
	import { El } from '../el'

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
	export let size: 'sm' | 'md' = 'sm'

	/**
	 * TODO
	 */
	export let style: 'border' | 'grow' = 'border'

	$: classes = clsx(
		{
			[`u-spinner-${size}`]: size,
			[`u-spinner-${style}`]: style,
			[`u-text-${color}`]: color,
		},
		klass
	)
</script>

<El tag="div" class={classes} componentName="spinner" role="status" {...$$restProps} />

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
