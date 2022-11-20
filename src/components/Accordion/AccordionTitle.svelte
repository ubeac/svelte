<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { SharedProps } from '../Base/El.type'

	let props: SharedProps = {}
	$: props = {
		...$$restProps,
		tag: 'div',
		cssPrefix: 'accordion-title',
		forwardEvents: forwardEventsBuilder(get_current_component()),
		cssProps: {},
	}
</script>

<El {...props}>
	<slot />
</El>
