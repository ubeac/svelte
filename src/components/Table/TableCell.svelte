<script lang="ts">
	import { getContext } from 'svelte'

	import { El, type TableCellProps } from '$lib/components/index.js'

	type $$Props = TableCellProps

	export let tag: $$Props['tag'] = 'td'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-cell'

	export let color: $$Props['color'] = undefined
	export let truncate: $$Props['truncate'] = undefined
	export let active: $$Props['active'] = undefined
	export let colspan: $$Props['colspan'] = undefined

	let head = getContext('TABLE:HEAD') ?? false

	$: cssProps = {
		color,
		truncate,
		active,
	}

	$: {
		tag = head ? 'th' : 'td'
	}
</script>

<El {...$$restProps} {colspan} {cssProps} {cssPrefix} {tag}>
	<slot />
</El>
