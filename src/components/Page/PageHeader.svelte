<script lang="ts">
	import El from '../El/El.svelte'
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
