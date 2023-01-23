<script lang="ts">
	import type { OffcanvasBodyProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = OffcanvasBodyProps
	/**
	 * Set Css Prefix for the OffcanvasBody
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'offcanvas-body'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
