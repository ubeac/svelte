<script lang="ts">
	import type { TableFootProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = TableFootProps

	export let tag: $$Props['tag'] = 'tfoot'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-foot'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
