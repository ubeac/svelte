<script lang="ts">
	import { El, type RadioProps } from '$lib'

	type $$Props = RadioProps

	//#region Props

	/**
	 * Set color of radio when it is checked
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set description of radio
	 */
	export let description: $$Props['description'] = undefined

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'radio'

	/**
	 * Set the radio disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set the radio as inline component
	 */
	export let inline: $$Props['inline'] = undefined

	/**
	 * Put your radios on the opposite side with reverse property.
	 */
	export let reverse: $$Props['reverse'] = undefined

	/**
	 * Set label of the radio
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Set name of the radio
	 */
	export let name: $$Props['name'] = undefined

	/**
	 * Set the radio read-only
	 */
	export let readonly: $$Props['readonly'] = undefined

	/**
	 * Set the radio checked
	 */
	export let checked: $$Props['checked'] = false

	/**
	 * the value of radio
	 */
	export let value: $$Props['value'] = undefined

	//#endregion

	/**
	 * id for inner input radio to be used outside the component
	 */
	let labelForId: $$Props['for'] = undefined
	export { labelForId as for }

	let inputElement: any = null
	let cssProps: any = {}
	let otherProps: any = {}

	$: {
		labelForId = inputElement?.id ?? ''

		cssProps = { color }

		otherProps = {
			cssPrefix,
			disabled,
			readonly,
			value,
			checked,
			name: name ?? inputElement?.id,
		}
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper" cssProps={{ inline, reverse }}>
	<El tag="input" type="radio" bind:element={inputElement} {...$$restProps} {...otherProps} {cssProps} on:change />
	{#if label || $$slots['default']}
		<El tag="label" cssPrefix="{cssPrefix}-label" for={labelForId}>
			<slot>
				{#if label}
					{label}
				{/if}
			</slot>
		</El>
	{/if}

	{#if description || $$slots['description']}
		<El cssPrefix="{cssPrefix}-description">
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
