<script lang="ts">
	import { El, type TextareaProps } from '$lib'

	type $$Props = TextareaProps

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'textarea'

	/**
	 * Set the input disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set border of input rounded
	 */
	export let borderRounded: $$Props['borderRounded'] = undefined

	/**
	 * Set order of input flush (without border)
	 */
	export let borderFlush: $$Props['borderFlush'] = undefined

	/**
	 * Set placeholder for the input
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the input read-only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * Set number of rows for Textarea
	 */
	export let rows: $$Props['rows'] = undefined

	/**
	 * Set the size of input
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the size of input
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * Set the type of input
	 */
	export let type: $$Props['type'] = undefined

	/**
	 * the text Value of input
	 */
	export let value: $$Props['value'] = undefined

	$: cssProps = {
		size,
		state,
		borderRounded,
		borderFlush,
	}

	$: otherProps = {
		cssPrefix,
		placeholder,
		disabled,
		readonly,
		type,
		rows,
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<El tag="textarea" bind:value {...$$restProps} {...otherProps} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
