<script lang="ts">
	import { El } from '../Base'
	import type { TableFootProps } from './Table.types'

	type $$Props = TableFootProps

	export let tag: $$Props['tag'] = 'tfoot'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-foot'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
