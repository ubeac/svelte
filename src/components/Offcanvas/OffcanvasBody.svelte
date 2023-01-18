<script lang="ts">
	import { El, type OffcanvasBodyProps } from '$lib/components/index.js'

	type $$Props = OffcanvasBodyProps
	/**
	 * Set Css Prefix for the OffcanvasBody
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'offcanvas-body'
</script>

<El {...$$restProps} {cssPrefix}>
	<slot />
</El>
