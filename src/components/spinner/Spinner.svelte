<script lang="ts">
	import { El } from '@app/components'
	import type { Colors } from '@app/types'
	import { condition } from '@app/utils'

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

{#if condition($$props)}
	<El tag="div" {classes} componentName="Spinner" role="status" {...$$restProps} />
{/if}
