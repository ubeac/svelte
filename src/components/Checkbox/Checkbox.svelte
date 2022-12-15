<script lang="ts">
	import { El, type ElProps } from '$lib/components'
	import type { CheckboxProps } from '$lib/components'

	type $$Props = CheckboxProps

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'checkbox'

	/**
	 * Set color of checkbox when it is checked
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Description of checkbox
	 */
	export let description: $$Props['description'] = undefined

	/**
	 * Show multiple items in same line
	 */
	export let inline: $$Props['inline'] = false

	/**
	 * Label of checkbox
	 */
	export let label: $$Props['label'] = ''

	/**
	 * Checked status of checkbox
	 */
	export let value: $$Props['value'] = false

	let element: HTMLElement
	let checkboxProps: Partial<ElProps>
	let labelProps: Partial<ElProps>

	$: id = element?.id

	$: wrapperProps = {
		cssPrefix: cssPrefix + '-wrapper',
		cssProps: {
			inline,
		},
	}

	$: checkboxProps = {
		...$$restProps,
		tag: 'input',
		cssPrefix,
		type: 'checkbox',
		checked: value,
		cssProps: {
			color
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

	function onChange(event: any) {
		value = event.target.checked
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
