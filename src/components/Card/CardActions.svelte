<script lang="ts">
	import type { ElProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = Partial<ElProps>

	export let cssPrefix: $$Props['cssPrefix'] = 'card-actions'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
