<script lang="ts">
	import { FormField, Select } from '$lib/components'
	import type { FormSelectProps, SelectProps } from '$lib/components'

	type $$Props = FormSelectProps

	/**
	 * Set the tag of FormSelect
	 */
	export let tag: $$Props['tag'] = 'select'

	/**
	 * Select items
	 */
	export let items: $$Props['items'] = []

	/**
	 * Set multiple attribute to select
	 */
	export let multiple: $$Props['multiple'] = false

	/**
	 * Value that selected options are bound to
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the selected option
	 */
	export let selected: $$Props['selected'] = undefined

	/**
	 * Set the size of the select component
	 */
	export let selectSize: $$Props['selectSize'] = undefined

	/**
	 * Set size attribute of select
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set select as disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set the text label of FormSelect
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Define hint for the FormField
	 */
	export let hint: $$Props['hint'] = undefined

	/**
	 * Set the FormSelect required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set placeholder for the select
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the state of FormSelect
	 */
	export let state: $$Props['state'] = undefined

	let selectProps: SelectProps = {}
	let props: any = {}

	$: {
		selectProps = {
			tag,
			placeholder,
			disabled,
			size,
			items,
			selectSize,
			selected,
			multiple,
			state,
		}

		props = {
			required,
			label,
			hint,
			state,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Select {...selectProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</Select>
	<slot name="hint" />
</FormField>
