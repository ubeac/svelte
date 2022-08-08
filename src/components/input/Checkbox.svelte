<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { mode } from '$app/env'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { Label } from '../label'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	export let label: string | undefined = undefined
	export let model: any[] | boolean | undefined = undefined
	export let value: string | number | undefined = undefined
	export let inline: boolean = false

	const dispatch = createEventDispatcher()
	let id = 'id' + Math.random()
	$: checkboxClasses = classname('checkbox', { checked, inline }, $$props.class)
	$: inputClasses = classname('checkbox-input', undefined, $$props.class)
	$: labelClasses = classname('checkbox-label', undefined, $$props.class)
	$: checked = Array.isArray(model) ? model.some((x) => x == value) : model
	function toggle(e: any) {
		checked = e.target.checked
		if (checked) {
			if (Array.isArray(model)) {
				if (!model.some((x) => x == value)) {
					model = [...model, value]
				}
			} else {
				model = true
			}
		}
		if (!checked) {
			if (Array.isArray(model)) {
				model = model.filter((item) => item != value)
			} else {
				model = false
			}
		}
		model = model
		dispatch('changed', model)
	}
</script>

{#if condition($$props)}
	<span class={checkboxClasses}>
		<input
			on:click={toggle}
			{id}
			{checked}
			{value}
			use:forwardEvents
			{...$$restProps}
			class={inputClasses}
			type="checkbox" />
		<Label for={id} class={labelClasses}>
			{#if label}
				{label}
			{:else}
				<slot />
			{/if}
		</Label>
	</span>
{/if}
