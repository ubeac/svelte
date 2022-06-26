<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let forwardEvents: any

	/**
	 * TODO
	 */
	export let preview: boolean = false

	/**
	 * TODO
	 */
	export let value: any = undefined

	if (!forwardEvents) forwardEvents = forwardEventsBuilderNew(get_current_component())

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
