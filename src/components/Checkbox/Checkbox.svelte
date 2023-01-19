<script lang="ts">
	import { type CheckboxProps, El, type ElProps } from '$lib'

	type $$Props = CheckboxProps

	//#region Props

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'checkbox'

	/**
	 * Set color of checkbox when it is checked
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set the checkbox checked attribute
	 */
	export let checked: $$Props['checked'] = false

	/**
	 * Description of checkbox
	 */
	export let description: $$Props['description'] = undefined

	/**
	 * Set the checkbox disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set the checkbox indeterminate
	 */
	export let indeterminate: $$Props['indeterminate'] = false

	/**
	 * Show multiple items in same line
	 */
	export let inline: $$Props['inline'] = false

	/**
	 * Label of checkbox
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Name of checkbox
	 */
	export let name: $$Props['name'] = undefined

	/**
	 * Put your checkboxes on the opposite side with reverse property.
	 */
	export let reverse: $$Props['reverse'] = undefined

	/**
	 * Set the checkbox value
	 */
	export let value: $$Props['value'] = undefined

	//#endregion

	let element: HTMLElement
	let checkboxProps: Partial<ElProps>
	let labelProps: Partial<ElProps>

	$: id = element?.id

	$: wrapperProps = {
		cssPrefix: cssPrefix + '-wrapper',
		cssProps: {
			inline,
			reverse,
		},
	}

	$: checkboxProps = {
		...$$restProps,
		cssPrefix,
		disabled,
		checked,
		value,
		name,
		type: 'checkbox',
		tag: 'input',
		cssProps: {
			color,
			indeterminate,
		},
	}

	$: labelProps = {
		cssPrefix: cssPrefix + '-label',
		tag: 'label',
		for: id,
	}

	$: descriptionProps = {
		cssPrefix: cssPrefix + '-description',
	}

	const onChange = (event: any) => {
		checked = event.target.checked
	}
</script>

<El {...wrapperProps}>
	<El {...checkboxProps} bind:element on:change={onChange} on:change />
	{#if label || $$slots['default']}
		<El {...labelProps}>
			<slot>
				{label}
			</slot>
		</El>
	{/if}

	{#if description || $$slots['description']}
		<El {...descriptionProps}>
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
