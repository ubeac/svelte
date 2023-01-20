<script lang="ts">
	import { DatePicker, type FormDatePickerProps, FormField } from '$lib/components'

	type $$Props = FormDatePickerProps

	//#region

	/**
	 * Set the tag of FormDatePicker
	 */
	export let tag: $$Props['tag'] = 'input'

	/**
	 * Set the FormDatePicker disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set border of FormDatePicker rounded
	 */
	export let borderRounded: $$Props['borderRounded'] = undefined

	/**
	 * Set order of FormDatePicker flush (without border)
	 */
	export let borderFlush: $$Props['borderFlush'] = undefined

	/**
	 * Set placeholder for the FormDatePicker
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the FormDatePicker required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set the size of FormDatePicker
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the state of FormDatePicker
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * Set the type of DatePicker
	 */
	export let type: $$Props['type'] = undefined

	/**
	 * the text Value of FormDatePicker
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the text label of FormDatePicker
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Define hint for the FormField
	 */
	export let hint: $$Props['hint'] = undefined

	//#endregion

	$: props = {
		required,
		label,
		hint,
		state,
	}

	$: DatePickerProps = {
		tag,
		placeholder,
		disabled,
		type,
		required,
		size,
		state,
		borderRounded,
		borderFlush,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<DatePicker {...DatePickerProps} bind:value on:changed>
		<slot />
	</DatePicker>
	<slot name="hint" />
</FormField>
