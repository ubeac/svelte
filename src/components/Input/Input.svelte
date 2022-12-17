<script lang="ts">
	import { onMount } from 'svelte'

	import Inputmask from 'inputmask'

	import { El } from '$lib/components'
	import type { InputProps } from '$lib/components'

	type $$Props = InputProps

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'input'

	export let element: any = undefined

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

	/**
	 * the mask Value of input
	 */
	export let mask: $$Props['mask'] = undefined

	/**
	 * the mask Value of input
	 */
	export let maskOptions: $$Props['maskOptions'] = undefined

	let cssProps = {}
	let otherProps = {}
	$: {
		cssProps = {
			size,
			state,
			borderRounded,
			borderFlush,
		}
		otherProps = {
			cssPrefix,
			placeholder,
			disabled,
			readonly,
			type,
		}
	}

	onMount(() => {
		if (element !== undefined && mask) {
			var im = new Inputmask(mask, maskOptions)
			im.mask(element)
		}
	})
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<El tag="input" bind:value bind:element {...$$restProps} {...otherProps} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
