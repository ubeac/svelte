<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { BreadcrumbItemProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbItemProps

	export let cssPrefix: $$Props['cssPrefix'] = 'breadcrumb-item'
	export let tag: $$Props['tag'] = 'li'

	export let active: $$Props['active'] = undefined
	export let href: $$Props['href'] = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		active,
	}

	$: otherProps = {
		cssPrefix,
		tag,
		'aria-current': active ? 'page' : null
	}
</script>

<El {forwardEvents} {...$$restProps} {cssProps} {...otherProps}>
	<El {href} tag="a" cssPrefix="breadcrumb-inner">
		<slot />
	</El>
</El>
