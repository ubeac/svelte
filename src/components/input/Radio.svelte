<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * The checked state of radio button
	 */
	export let value: boolean = false

	const dispatch = createEventDispatcher()

	const forwardEvents = forwardEventsBuilderNew(get_current_component())

	$: classes = classname('Radio', null, $$props.class)

	function change(event: any) {
		value = event.target.checked
	}
</script>

{#if condition($$props)}
	<input type="radio" checked={value} on:change={change} use:forwardEvents {...$$restProps} class={classes} />
{/if}
