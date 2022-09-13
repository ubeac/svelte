<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { CollapseToggler } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	const context = getContext<any>('ACCORDION')

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('accordion-header', undefined, $$props.class)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<CollapseToggler class={classname('collapse-toggler-accordion')} id={$context.id}>
		<slot />
	</CollapseToggler>
</div>
