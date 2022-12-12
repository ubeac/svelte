<script lang="ts">
	import { setContext } from 'svelte'

	import { El } from '../Base'
	import type { TableHeadProps } from './Table.types'

	type $$Props = TableHeadProps

	export let tag: $$Props['tag'] = 'thead'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-head'

	setContext('TABLE:HEAD', true)
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
