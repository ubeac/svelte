<script lang="ts">
	import { browser } from '$app/environment'
	import { Card, CardBody, El, Page, PageBody, PageHeader } from '$lib/components'

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

	$: if (browser) document.title = title ?? ''
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
