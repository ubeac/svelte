<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { CardHeader, CardTitle } from '.'

	/**
	 * Set title in card hesder section
	 */
	export let title: string | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('card', {}, $$props.class, true)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		{#if title}
			<CardHeader><CardTitle>{title}</CardTitle></CardHeader>
		{/if}
		<slot />
	</div>
{/if}
