<script lang="ts">
	import { El } from '../Base'
	import type { TableBodyProps } from './Table.types'

	type $$Props = TableBodyProps

	export let tag: $$Props['tag'] = 'tbody'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-body'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
