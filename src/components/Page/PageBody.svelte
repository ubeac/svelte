<script lang="ts">
	import { El } from '$lib/components'

	import type { PageBodyProps } from './Page.types'

	type $$Props = PageBodyProps

	/**
	 * Set Css Prefix for the Page
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'page-body'

	$: cssProps = {}
	$: otherProps = { cssPrefix }
</script>

<El {...$$restProps} {cssProps} {...otherProps}><slot /></El>
