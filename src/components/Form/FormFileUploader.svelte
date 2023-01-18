<script lang="ts">
	import { FileUploader, FormField, type FormFileUploaderProps } from '$lib/components/index.js'

	type $$Props = FormFileUploaderProps

	//#region

	/**
	 * Set the cssPrefix of FormFileUploader
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'form-file-uploader'

	/**
	 * Set the tag of FormFileUploader
	 */
	export let tag: $$Props['tag'] = 'input'

	/**
	 * Set the FormFileUploader disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set the FormFileUploader read-only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * Set the FormFileUploader required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set the size of FormFileUploader
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the state of FormFileUploader
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * Set the type of input
	 */
	export let type: $$Props['type'] = undefined

	/**
	 * TODO
	 */
	export let multiple: $$Props['multiple'] = undefined

	/**
	 * the text Value of FormFileUploader
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the text label of FormFileUploader
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
		cssPrefix,
	}

	$: fileUploaderProps = {
		tag,
		multiple,
		disabled,
		readonly,
		type,
		required,
		size,
		state,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<FileUploader {...fileUploaderProps} bind:value>
		<slot />
	</FileUploader>
	<slot name="hint" />
</FormField>
