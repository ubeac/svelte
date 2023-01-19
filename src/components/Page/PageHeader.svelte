<script lang="ts">
	import { El } from '$lib'

	import type { PageHeaderProps } from './Page.types'

	type $$Props = PageHeaderProps

	/**
	 * Set Css Prefix for the Page
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'page-header'

	$: cssProps = {}
	$: otherProps = { cssPrefix }
</script>

<El {...$$restProps} {cssProps} {...otherProps}><slot /></El>
