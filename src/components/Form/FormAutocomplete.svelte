<script lang="ts">
	import { Autocomplete, type FormAutocompleteProps, FormField } from '$lib/components'

	type $$Props = FormAutocompleteProps

	//#region

	/**
	 * Set autocomplete as disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Define hint for the FormField
	 */
	export let hint: $$Props['hint'] = undefined

	/**
	 * Autocomplete items
	 */
	export let items: $$Props['items'] = []

	/**
	 * Specifies the key of the object
	 */
	export let itemKey: $$Props['itemKey'] = 'key'

	/**
	 * Specifies the label of the object
	 */
	export let itemValue: $$Props['itemValue'] = 'value'

	/**
	 * Set the text label of FormSelect
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Load more options using async function.
	 */
	export let load: $$Props['load'] = undefined

	/**
	 * Choose multiple items
	 */
	export let multiple: $$Props['multiple'] = undefined

	/**
	 * Set placeholder for the autocomplete
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the FormSelect required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set the size of the autocomplete component
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the state of autocomplete
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * Value that selected options are bound to
	 */
	export let value: $$Props['value'] = undefined

	//#endregion

	$: props = {
		required,
		label,
		hint,
		state,
	}

	$: autocompleteProps = {
		disabled,
		items,
		itemKey,
		itemValue,
		load,
		multiple,
		placeholder,
		// required, // TODO
		size,
		state,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Autocomplete {...autocompleteProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</Autocomplete>
	<slot name="hint" />
</FormField>
