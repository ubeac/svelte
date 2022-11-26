<script lang="ts">
	import { El } from '$lib/components'

	import type { ElProps } from '../Base/El.type'

	type $$Props = Partial<ElProps>

	export let cssPrefix: $$Props['cssPrefix'] = 'card-header'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
