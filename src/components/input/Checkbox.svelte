<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Checked state of Checkbox
	 */
	export let value: boolean | undefined = undefined

	$: classes = classname('checkbox', undefined, $$props.class)
</script>

{#if condition($$props)}
	<input bind:checked={value} use:forwardEvents {...$$restProps} class={classes} type="checkbox" />
{/if}
