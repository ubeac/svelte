<script lang="ts">
	import { FormField, Textarea } from '$lib/components'
	import type { FormTextAreaProps } from '$lib/components'

	type $$Props = FormTextAreaProps

	export let cssPrefix: $$Props['cssPrefix'] = 'form-textarea'

	/**
	 * Set the tag of FormTextarea
	 */
	export let tag: $$Props['tag'] = 'textarea'

	/**
	 * Set the FormTextarea disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set border of FormTextarea rounded
	 */
	export let borderRounded: $$Props['borderRounded'] = undefined

	/**
	 * Set order of FormTextarea flush (without border)
	 */
	export let borderFlush: $$Props['borderFlush'] = undefined

	/**
	 * Set placeholder for the FormTextarea
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the FormTextarea read-only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * Set the FormTextarea required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set rows for the FormTextarea
	 */
	export let rows: $$Props['rows'] = 3

	/**
	 * Set the size of FormTextarea
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the state of FormTextarea
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * Set the type of FormTextarea
	 */
	export let type: $$Props['type'] = undefined

	/**
	 * the text Value of FormTextarea
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the text label of FormTextarea
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Define hint for the FormTextarea
	 */
	export let hint: $$Props['hint'] = undefined

	$: props = {
		required,
		label,
		hint,
		state,
		cssPrefix,
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
		rows,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Textarea {...inputProps} bind:value>
		<slot />
	</Textarea>
	<slot name="hint" />
</FormField>
