<script lang="ts">
	import { onMount } from 'svelte'

	import Inputmask from 'inputmask'

	import { El, type InputProps } from '$lib/components/index.js'

	type $$Props = InputProps

	//#region Props

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
	 * the mask Value of input
	 */
	export let mask: $$Props['mask'] = undefined
	/**
	 * the mask Value of input
	 */
	export let maskOptions: $$Props['maskOptions'] = undefined

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

	//#endregion

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

	let element: HTMLInputElement
	onMount(() => {
		if (element !== undefined && mask) {
			var im = new Inputmask(mask, maskOptions)
			im.mask(element)
		}
		return () => {
			if (element !== undefined && mask) {
				Inputmask.remove(element)
			}
		}
	})
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<slot />
	<El tag="input" bind:value bind:element {...$$restProps} {...otherProps} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
