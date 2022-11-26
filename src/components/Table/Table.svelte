<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import { El } from '../Base'
	import type { TableProps } from './Table.types'

	type $$Props = TableProps

	export let tag: $$Props['tag'] = 'table'
	export let cssPrefix: $$Props['cssPrefix'] = 'table'
	export let tableParentCssPrefix: $$Props['tableParentCssPrefix'] = 'table-parent'

	export let border: $$Props['border'] = undefined
	export let hover: $$Props['hover'] = undefined
	export let striped: $$Props['striped'] = undefined
	export let wrap: $$Props['wrap'] = undefined
	export let size: $$Props['size'] = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		border,
		hover,
		striped,
		wrap,
		size,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El cssPrefix={tableParentCssPrefix} tag="div">
	<El {forwardEvents} {...$$restProps} {cssProps} {...otherProps}>
		<slot />
	</El>
</El>
