<script lang="ts">
	import { El } from '$lib/components'
	import type { ElProps } from '$lib/components'

	type $$Props = Partial<ElProps>

	export let cssPrefix: $$Props['cssPrefix'] = 'card-title'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
