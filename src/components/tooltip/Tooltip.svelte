<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('tooltip', undefined, $$props.class)
</script>

{#if condition($$props)}
	<Popup {forwardEvents} {...$$restProps} class={classes}>
		<div class={classname('tooltip-arrow')} data-popper-arrow />
		<slot />
	</Popup>
{/if}
