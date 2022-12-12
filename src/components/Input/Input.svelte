<script lang="ts">
	import { El } from '$lib/components'
	import type { InputProps } from '$lib/components'

	type $$Props = InputProps

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'input'

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
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<El tag="input" bind:value {...$$restProps} {...otherProps} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
