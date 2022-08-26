<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	let forwardEvents = forwardEventsBuilder(get_current_component())
	const dispatch = createEventDispatcher()

	/**
	 * Set color of checkbox when it is checked
	 */
	export let color: Colors = 'primary'

	/**
	 * Set label value of checkbox
	 */
	export let label: string | undefined = undefined

	/**
	 * Set checkbox value
	 */
	export let value: boolean = false

	$: checkboxClasses = classname('checkbox', {}, $$props.class)
	$: inputClasses = classname('checkbox-input', { color }, $$props.class)
	$: labelClasses = classname('checkbox-label', undefined, $$props.class)

	function change(event: any) {
		value = event.target.checked
		dispatch('change', value)
	}
</script>

{#if condition($$props)}
	<label class={checkboxClasses}>
		<input
			on:change={change}
			bind:checked={value}
			{value}
			use:forwardEvents
			{...$$restProps}
			class={inputClasses}
			type="checkbox" />
		<span class={labelClasses}>
			{#if label}
				{label}
			{:else}
				<slot />
			{/if}
		</span>
	</label>
{/if}
