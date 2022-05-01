<script lang="ts">
	import { El } from '@app/components'
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
		color: !outline && color,
		block,
		disabled,
		loading,
		size,
		[`outline-${color}`]: !!(outline && color),
	}
</script>

<El tag="button" {classes} componentName="Button" {disabled} on:click {...$$restProps}>
	<slot />
</El>

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
