<script lang="ts">
	import type { TableProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = TableProps

	export let tag: $$Props['tag'] = 'table'
	export let cssPrefix: $$Props['cssPrefix'] = 'table'
	export let tableParentCssPrefix: $$Props['tableParentCssPrefix'] = 'table-parent'

	export let color: $$Props['color'] = undefined
	export let border: $$Props['border'] = undefined
	export let hover: $$Props['hover'] = undefined
	export let striped: $$Props['striped'] = undefined
	export let wrap: $$Props['wrap'] = undefined
	export let responsive: $$Props['responsive'] = undefined
	export let size: $$Props['size'] = undefined
	export let sort: $$Props['sort'] = undefined

	$: cssProps = {
		color,
		border,
		hover,
		striped,
		wrap,
		size,
		sort,
	}

	$: parentCssProps = {
		responsive,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El cssPrefix={tableParentCssPrefix} cssProps={parentCssProps} tag="div">
	<El {...$$restProps} {cssProps} {...otherProps}>
		<slot />
	</El>
</El>
