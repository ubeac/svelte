<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { CollapseToggler } from '../collapse'

	const id = getContext<string>('ACCORDION:ID')

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('accordion-header', undefined, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<CollapseToggler class={classname('collapse-toggler-accordion')} {id}>
			<slot />
		</CollapseToggler>
	</div>
{/if}
