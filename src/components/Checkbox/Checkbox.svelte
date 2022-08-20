<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { Label } from '../label'

	let forwardEvents = forwardEventsBuilder(get_current_component())
	const dispatch = createEventDispatcher()

	export let label: string | undefined = undefined
	export let model: any[] | boolean | undefined = undefined
	export let value: string | number | undefined = undefined
	export let inline: boolean = false

	$: checkboxClasses = classname('checkbox', { checked, inline }, $$props.class)
	$: inputClasses = classname('checkbox-input', undefined, $$props.class)
	$: labelClasses = classname('checkbox-label', undefined, $$props.class)
	$: checked = Array.isArray(model) ? model.some((x) => x == value) : model
	function toggle(e: any) {
		checked = e.target.checked
		// if (checked) {
		// 	// if (Array.isArray(model)) {
		// 	// 	if (!model.some((x) => x == value)) {
		// 	// 		model = [...model, value]
		// 	// 	}
		// 	// } else {
		// 	// }
		// 	model = true
		// }
		// if (!checked) {
		// 	// if (Array.isArray(model)) {
		// 	// 	model = model.filter((item) => item != value)
		// 	// } else {
		// 	// }
		// 	model = false
		// }
		model = checked
		dispatch('changed', model)
	}
</script>

{#if condition($$props)}
	<label class={checkboxClasses}>
		<input
			on:click={toggle}
			{checked}
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
