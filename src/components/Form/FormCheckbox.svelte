<script lang="ts">
	import { Checkbox, type FormCheckboxProps, FormField } from '$lib/index.js'

	type $$Props = FormCheckboxProps

	//#region Props
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let state: $$Props['state'] = undefined
	export let required: $$Props['required'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'form-checkbox'

	export let color: $$Props['color'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let description: $$Props['description'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let checked: $$Props['checked'] = undefined
	export let indeterminate: $$Props['indeterminate'] = undefined
	export let inline: $$Props['inline'] = undefined
	//#endregion

	$: props = {
		required,
		label,
		hint,
		state,
		cssPrefix,
	}

	$: checkboxProps = {
		color,
		inline,
		description,
		reverse,
		indeterminate,
		disabled,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Checkbox {...checkboxProps} bind:checked bind:value on:change>
		<slot />
	</Checkbox>
	<slot name="hint" />
</FormField>
