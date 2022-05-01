<script lang="ts">
	import { El } from '@app/components'
	import type { Colors } from '@app/types'

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

<El tag="div" {classes} componentName="Spinner" role="status" {...$$restProps} />

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
