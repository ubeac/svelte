<script lang="ts">
	import type { TableBodyProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = TableBodyProps

	export let tag: $$Props['tag'] = 'tbody'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-body'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
