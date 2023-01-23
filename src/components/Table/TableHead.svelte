<script lang="ts">
	import { setContext } from 'svelte'

	import type { TableHeadProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = TableHeadProps

	export let tag: $$Props['tag'] = 'thead'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-head'

	setContext('TABLE:HEAD', true)
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
