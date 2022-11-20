<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { SharedProps } from '../Base/El.type'
	import type { AccordionsProps } from './Accordion.types'

	type $$Props = AccordionsProps

	/**
	 * Id of Accordion group
	 */
	export let group: $$Props['group'] = nanoid()

	/**
	 * Let more than one Accordion be open in same time
	 */
	export let persistent: $$Props['persistent'] = false

	const context = writable({ group, persistent, children: [] })

	setContext('ACCORDIONS', context)

	let props: SharedProps = {}

	$: props = {
		...$$restProps,
		id: group,
		forwardEvents: forwardEventsBuilder(get_current_component()),
		cssPrefix: 'accordion',
		tag: 'div',
		cssProps: {},
	}

	$: context.update((item) => {
		item.group = group
		item.persistent = persistent
		return item
	})
</script>

<El {...props}>
	<slot />
</El>
