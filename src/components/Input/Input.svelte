<script lang="ts">
	import { El, Spinner } from '$lib/components'
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

<El cssPrefix="{cssPrefix}-wrapper">
	<slot name="start">
		<button class="btn" type="button">Go!</button><span class="input-group-text">start</span>
	</slot>

	<El bind:value {...$$restProps} {...otherProps} {cssProps} />
	{#if state === 'loading'}
		<slot name="state">
			<El tag="span" cssPrefix="{cssPrefix}-icon-wrapper">
				<Spinner size="sm" animate="border" />
			</El>
		</slot>
	{/if}
	<slot name="end">
		<span class="input-group-text">aaa</span><button class="btn" type="button">Search!</button>
	</slot>
</El>
