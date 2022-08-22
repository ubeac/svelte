<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * The text content of Textarea
	 */
	export let value: string | undefined = undefined

	$: classes = classname('textarea', $$props.class)
</script>

{#if condition($$props)}
	<textarea bind:value use:forwardEvents {...$$restProps} class={classes} />
{/if}
