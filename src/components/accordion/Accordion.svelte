<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'
	import type { Writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import { Collapse, CollapseToggler } from '../collapse'

	/**
	 * Id of related Accordions Element
	 */
	export let group: string | undefined = undefined

	/**
	 * Id of Accordion
	 */
	export let id: string = nanoid()

	/**
	 * Controls open/close state of Accordion Item
	 */
	export let open: boolean = false

	/**
	 * Title of Accordion
	 */
	export let title: string | undefined = undefined

	const context = getContext<Writable<string | undefined>>('ACCORDIONS:GROUP')

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: group = $context

	$: classes = classname('accordion', {}, $$props.class)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<div class={classname('accordion-header')}>
		<CollapseToggler class={classname('collapse-toggler-accordion')} {id}>
			{title}
		</CollapseToggler>
	</div>
	<Collapse class={classname('collapse-accordion')} {id} {open} {group}>
		<slot />
	</Collapse>
</div>
