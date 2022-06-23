<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Set id of the radio element
	 */
	export let id: string | undefined = undefined

	/**
	 * Set name of radio element
	 */
	export let name: string | unefined = undefined

	/**
	 * The checked state of radio button
	 */
	export let value: boolean = false

	const dispatch = createEventDispatcher()

	// TODO: Typescript type for function parameters
	function onChange({ target }) {
		value = target.checked
		dispatch('change', value)
	}

	const forwardEvents = forwardEventsBuilderNew(get_current_component())

	$: classes = classname('Radio', null, $$props.class)
</script>

{#if condition($$props)}
	<input
		{id}
		{name}
		type="radio"
		checked={value}
		on:change={onChange}
		use:forwardEvents
		{...$$restProps}
		class={classes} />
{/if}
