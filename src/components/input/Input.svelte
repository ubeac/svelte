<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Show value of input in Preview mode
	 */
	export let preview: boolean = false

	/**
	 * the text Value of input
	 */
	export let value: any = undefined

	$: classes = classname('input', { preview }, $$props.class)
</script>

{#if condition($$props)}
	{#if preview}
		<div use:forwardEvents {...$$restProps} class={classes}>
			{value}
		</div>
	{:else}
		<input bind:value use:forwardEvents {...$$restProps} class={classes} />
	{/if}
{/if}
