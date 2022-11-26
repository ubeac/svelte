<script lang="ts">
	import { El } from '../Base'
	import type { TableRowProps } from './Table.types'

	type $$Props = TableRowProps

	export let tag: $$Props['tag'] = 'tr'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-row'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
