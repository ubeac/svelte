<script lang="ts">
	import { El, type TableBodyProps } from '$lib/components/index.js'

	type $$Props = TableBodyProps

	export let tag: $$Props['tag'] = 'tbody'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-body'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
