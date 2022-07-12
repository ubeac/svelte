<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Show content of textarea in Preview mode
	 */
	export let preview: boolean = false

	/**
	 * The text content of Textarea
	 */
	export let value: string | undefined = undefined

	$: classes = classname('textarea', { preview }, $$props.class)
</script>

{#if condition($$props)}
	{#if preview}
		<div use:forwardEvents {...$$restProps} class={classes}>
			{value}
		</div>
	{:else}
		<textarea bind:value use:forwardEvents {...$$restProps} class={classes} />
	{/if}
{/if}
