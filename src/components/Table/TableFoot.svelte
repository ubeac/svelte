<script lang="ts">
	import { El, type TableFootProps } from '$lib/index.js'

	type $$Props = TableFootProps

	export let tag: $$Props['tag'] = 'tfoot'
	export let cssPrefix: $$Props['cssPrefix'] = 'table-foot'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
