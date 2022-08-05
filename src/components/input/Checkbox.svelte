<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let value: any = undefined

	$: classes = classname('checkbox', undefined, $$props.class)
</script>

{#if condition($$props)}
	<input bind:checked={value} on:change {...$$restProps} class={classes} type="checkbox" />

	<!-- TODO: use:forwardEvents -->
	<!-- <input bind:checked={value} use:forwardEvents {...$$restProps} class={classes} type="checkbox" /> -->
{/if}
