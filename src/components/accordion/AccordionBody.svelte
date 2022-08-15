<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { Collapse } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	const accordion = getContext<any>('ACCORDION')

	const accordions = getContext<any>('ACCORDIONS')

	$: classes = classname('accordion-body', undefined, $$props.class)
</script>

{#if condition($$props)}
	<Collapse
		class={classname('collapse-accordion')}
		group={$accordions?.persistent ? undefined : `#${$accordions?.group}`}
		id={$accordion?.id}
		open={$accordion?.open}>
		<div use:forwardEvents {...$$restProps} class={classes}>
			<slot />
		</div>
	</Collapse>
{/if}
