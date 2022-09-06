<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	let forwardEvents = forwardEventsBuilder(get_current_component())
	const dispatch = createEventDispatcher()

	/**
	 * Radio checked status
	 */
	export let checked: boolean | undefined = undefined
	/**
	 * Radio color
	 */
	export let color: Colors = 'default'
	/**
	 * Radio label
	 */
	export let label: string | undefined = undefined
	/**
	 * Radio name
	 */
	export let name: string | undefined = undefined
	/**
	 * Radio value
	 */
	export let value: boolean = false

	$: radioClasses = classname('radio', { checked }, $$props.class)
	$: inputClasses = classname('radio-input', { color }, $$props.class)
	$: labelClasses = classname('radio-label', undefined, $$props.class)

	function change(event: any) {
		value = event.target.value
		dispatch('change', value)
	}
</script>

<label class={radioClasses}>
	<input
		{checked}
		type="radio"
		{name}
		{value}
		use:forwardEvents
		{...$$restProps}
		class={inputClasses}
		on:change={change} />
	<span class={labelClasses}>
		{#if label}
			{label}
		{:else}
			<slot />
		{/if}
	</span>
</label>
