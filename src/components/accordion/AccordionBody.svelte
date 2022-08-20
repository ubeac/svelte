<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { Collapse } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	const accordion = getContext<any>('ACCORDION')

	const accordions = getContext<any>('ACCORDIONS')

	$: classes = classname('accordion-body', undefined, $$props.class)

	$: id = $accordion?.id

	$: group = $accordions?.persistent ? undefined : `#${$accordions?.group}`

	$: open = $accordion?.open
</script>

{#if condition($$props)}
	{#if $accordion}
		<Collapse class={classname('collapse-accordion')} {group} {id} {open}>
			<div use:forwardEvents {...$$restProps} class={classes}>
				<slot />
			</div>
		</Collapse>
	{:else}
		<div>Cannot use AccordionBody outside of Accordion</div>
	{/if}
{/if}
