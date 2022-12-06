<script lang="ts">
	import { El } from '$lib/components'

	import type { BreadcrumbItemProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbItemProps

	export let cssPrefix: $$Props['cssPrefix'] = 'breadcrumb-item'
	export let tag: $$Props['tag'] = 'li'
	export let active: $$Props['active'] = undefined
	export let href: $$Props['href'] = undefined

	$: cssProps = {
		active,
	}

	$: otherProps = {
		cssPrefix,
		tag,
		'aria-current': active ?? 'page',
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<El {href} tag="a" cssPrefix="breadcrumb-inner">
		<slot />
	</El>
</El>
