<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let preview: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('input', { preview }, $$props.class)
</script>

{#if condition($$props)}
	{#if preview}
		<div use:forwardEvents {...$$restProps} class={classes}>
			{$$props.value}
		</div>
	{:else}
		<input use:forwardEvents {...$$restProps} class={classes} />
	{/if}
{/if}
