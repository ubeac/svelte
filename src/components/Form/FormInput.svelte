<script lang="ts">
	import { onMount } from 'svelte'

	import Inputmask from 'inputmask'

	import { FormField, Input } from '$lib/components'
	import type { FormInputProps } from '$lib/components'

	type $$Props = FormInputProps

	/**
	 * Set the tag of FormInput
	 */
	export let tag: $$Props['tag'] = 'input'

	/**
	 * Set the FormInput disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set border of FormInput rounded
	 */
	export let borderRounded: $$Props['borderRounded'] = undefined

	/**
	 * Set order of FormInput flush (without border)
	 */
	export let borderFlush: $$Props['borderFlush'] = undefined

	/**
	 * Set placeholder for the FormInput
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the FormInput read-only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * Set the FormInput required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set the size of FormInput
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the state of FormInput
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * Set the type of input
	 */
	export let type: $$Props['type'] = undefined

	/**
	 * the text Value of FormInput
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the text label of FormInput
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Define hint for the FormField
	 */
	export let hint: $$Props['hint'] = undefined

	/**
	 * the mask Value of input
	 */
	export let mask: $$Props['mask'] = undefined

	/**
	 * the mask Value of input
	 */
	export let maskOptions: $$Props['maskOptions'] = undefined

	$: props = {
		required,
		label,
		hint,
		state,
	}

	$: inputProps = {
		tag,
		placeholder,
		disabled,
		readonly,
		type,
		required,
		size,
		state,
		borderRounded,
		borderFlush,
		mask,
		maskOptions,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Input {...inputProps} bind:value {mask} {maskOptions}>
		<slot />
	</Input>
	<slot name="hint" />
</FormField>
