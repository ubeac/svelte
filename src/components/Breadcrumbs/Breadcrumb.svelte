<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { BreadcrumbProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbProps

	export let cssPrefix: $$Props['cssPrefix'] = 'breadcrumb'
	export let tag: $$Props['tag'] = 'ol'

	export let separator: $$Props['separator'] = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		separator,
	}

	$: otherProps = {
		tag,
		cssPrefix,
		'aria-label': "breadcrumbs"
	}
</script>

<El {...$$restProps} {forwardEvents} {cssProps} {...otherProps}>
	<slot />
</El>
