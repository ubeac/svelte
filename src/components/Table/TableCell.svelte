<script lang="ts">
  import { getContext } from 'svelte'
	import { El } from '../Base'
	import type { TableCellProps } from './Table.types'

	type $$Props = TableCellProps

	export let tag: $$Props['tag'] = 'td';
	export let cssPrefix: $$Props['cssPrefix'] = 'table-cell'

	let head = getContext('TABLE:HEAD') ?? false

	$: {
		tag = head ? 'th' : 'td'
	}
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
