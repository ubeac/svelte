<script lang="ts">
	import { El } from '$lib/components'

	import type { ElProps } from '../Base/El.type'

	type $$Props = Partial<ElProps>

	export let cssPrefix: $$Props['cssPrefix'] = 'card-title'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
