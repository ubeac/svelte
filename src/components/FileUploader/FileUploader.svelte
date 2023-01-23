<script lang="ts">
	import type { FileUploaderProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = FileUploaderProps

	//#region Props

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
	 * Allow choosing multiple files
	 */
	export let multiple: $$Props['multiple'] = undefined

	/**
	 * Set the input read only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * Set the size of input
	 */
	export let size: $$Props['size'] = 'md'

	/**
	 * Set the validation state of input
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * List of selected files.
	 */
	export let value: $$Props['value'] = undefined

	// #endregion

	$: cssProps = {
		size,
		state,
	}

	$: props = {
		tag,
		cssPrefix,
		readonly,
		disabled,
		multiple,
		accept,
		type: 'file',
	}

	function onChange(e: any) {
		value = e.target.files
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<slot />
	<El {...$$restProps} {...props} {cssProps} on:change={onChange} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
