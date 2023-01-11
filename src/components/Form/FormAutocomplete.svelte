<script lang="ts">
	import { Autocomplete, type FormAutocompleteProps, FormField } from '$lib/components'

	type $$Props = FormAutocompleteProps

	//#region

	/**
	 * Set the tag of FormAutocomplete
	 */
	export let tag: $$Props['tag'] = 'select'

	export let create: $$Props['create'] = undefined
	export let items: $$Props['items'] = []
	export let multiple: $$Props['multiple'] = undefined
	export let load: $$Props['load'] = undefined
	export let sort: $$Props['sort'] = true
	export let key: $$Props['key'] = 'key'
	export let text: $$Props['text'] = 'text'
	export let disabled: $$Props['disabled'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined

	//#endregion

	$: props = {
		required,
		label,
		hint,
		state,
	}

	$: autocompleteProps = {
		tag,
		load,
		create,
		items,
		multiple,
		sort,
		key,
		text,
		placeholder,
		disabled,
		required,
		state,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Autocomplete {...autocompleteProps} bind:value on:change on:create />
	<slot name="hint" />
</FormField>
