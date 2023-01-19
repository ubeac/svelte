<script lang="ts">
	import { El } from '$lib/index.js'

	import type { PageProps } from './Page.types'

	type $$Props = PageProps

	/**
	 * Set Css Prefix for the Page
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'page'

	/**
	 * Specify container (breakpoint) for page.
	 */
	export let container: $$Props['container'] = undefined

	/**
	 * Specify a title for page header.
	 */
	export let title: $$Props['title'] = undefined

	$: cssProps = { container }
	$: otherProps = { title, cssPrefix }

	$: if (typeof window !== 'undefined') document.title = title ?? ''
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
