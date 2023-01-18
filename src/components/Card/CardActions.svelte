<script lang="ts">
	import { El } from '$lib/index.js'
	import type { ElProps } from '$lib/index.js'

	type $$Props = Partial<ElProps>

	export let cssPrefix: $$Props['cssPrefix'] = 'card-actions'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
