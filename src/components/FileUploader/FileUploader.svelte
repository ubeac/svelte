<script lang="ts">
	import { El, type FileUploaderProps } from '$lib/components'

	type $$Props = FileUploaderProps

	/**
	 * Set Css Prefix for the FileUploader
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'file-uploader'

	/**
	 * Set the tag of FileUploader
	 */
	export let tag: $$Props['tag'] = 'input'

	/**
	 * Set allowed file types
	 */
	export let accept: $$Props['accept'] = undefined

	/**
	 * Set the input disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set placeholder for the input
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the input read only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * Set the size of input
	 */
	export let size: $$Props['size'] = 'md'

	/**
	 * List of selected files.
	 */
	export let value: $$Props['value'] = undefined

	$: cssProps = {
		size,
		disabled,
		readonly,
	}

	$: props = {
		tag,
		cssPrefix,
		cssProps,
		readonly,
		disabled,
		placeholder,
		accept,
		type: 'file',
	}

	function onChange(e: any) {
		value = e.target.files
	}
</script>

<El {...$$restProps} {...props} on:change={onChange} />
