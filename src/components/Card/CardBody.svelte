<script lang="ts">
	import { El } from '$lib'
	import type { ElProps } from '$lib'

	type $$Props = Partial<ElProps>

	export let cssPrefix: $$Props['cssPrefix'] = 'card-body'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
