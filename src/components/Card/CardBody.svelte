<script lang="ts">
	import { El } from '$lib/components/index.js'
	import type { ElProps } from '$lib/components/index.js'

	type $$Props = Partial<ElProps>

	export let cssPrefix: $$Props['cssPrefix'] = 'card-body'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
