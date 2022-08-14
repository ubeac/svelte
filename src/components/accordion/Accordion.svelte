<script lang="ts">
	import { get_current_component, getContext, setContext } from 'svelte/internal'
	import type { Writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { AccordionHeader } from '.'
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

	setContext('ACCORDION:ID', id)

	$: classes = classname('accordion', undefined, $$props.class)

	$: group = $context
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot name="header">
			{#if title}
				<AccordionHeader>
					{title}
				</AccordionHeader>
			{/if}
		</slot>
		<Collapse class={classname('collapse-accordion')} {id} {open} {group}>
			<slot />
		</Collapse>
	</div>
{/if}
