<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { SharedProps } from '../Base/El.type'
	import type { AccordionBodyProps, AccordionContext } from './Accordion.types'

	type $$Props = AccordionBodyProps

	const accordion: AccordionContext = getContext('ACCORDION')

	let props: SharedProps = {}
	$: props = {
		...$$restProps,
		cssPrefix: 'accordion-body',
		forwardEvents: forwardEventsBuilder(get_current_component()),
		tag: 'div',
		cssProps: {
			open: $accordion.open,
		},
	}
</script>

<El {...props}>
	{#if $accordion}
		<slot />
	{:else}
		Cannot use AccordionBody outside of Accordion
	{/if}
</El>
