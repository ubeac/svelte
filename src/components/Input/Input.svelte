<script lang="ts">
	import { El } from '$lib/components'
	import type { InputProps } from '$lib/components'

	type $$Props = InputProps

	export let cssPrefix: $$Props['cssPrefix'] = 'input'

	export let tag: $$Props['tag'] = 'input'

	/**
	 * Set the input disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	export let borderRounded: $$Props['borderRounded'] = undefined

	export let borderFlush: $$Props['borderFlush'] = undefined

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
	export let size: $$Props['size'] = undefined

	/**
	 * Set the size of input
	 */
	export let state: $$Props['state'] = undefined

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
		tag,
		cssPrefix,
		placeholder,
		disabled,
		readonly,
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<El bind:value {...$$restProps} {...otherProps} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
