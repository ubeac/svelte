<script lang="ts">
	import { get_current_component, getContext, setContext } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../base'
	import type { SharedProps } from '../base/El.type'
	import type { AccordionContext, AccordionProps, AccordionsContext } from './Accordion.types'

	type $$Props = AccordionProps

	/**
	 * Id of Accordion
	 */
	export let id: $$Props['id'] = nanoid()

	/**
	 * Controls open/close state of Accordion Item
	 */
	export let open: $$Props['open'] = false

	const context: AccordionContext = writable({ id, open })

	setContext('ACCORDION', context)

	const acccordions: AccordionsContext = getContext('ACCORDIONS')

	acccordions.update((item: any) => {
		item.children.push(context)
		return item
	})

	let props: SharedProps = {}
	$: props = {
		...$$restProps,
		forwardEvents: forwardEventsBuilder(get_current_component()),
		cssPrefix: 'accordion-item',
		tag: 'div',
		cssProps: {},
	}

	$: context.set({ id, open })
</script>

<El {...props}>
	<slot />
</El>
