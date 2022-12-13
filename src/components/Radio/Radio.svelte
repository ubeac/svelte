<script lang="ts">
	import { getContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { El } from '$lib/components'
	import type { RadioProps } from '$lib/components'

	type $$Props = RadioProps

	export let color: $$Props['color'] = undefined

	/**
	 * Set Css Prefix for the Input
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'radio'

	/**
	 * Set the radio disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

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

	const ctx = getContext('RadioButtonGroup')
	const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : undefined)

	if (ctx) {
		ctx.add({ checked, disabled, value })
	}

	$: checked = $selectedValue === value

	$: cssProps = { color }

	$: otherProps = {
		cssPrefix,
		disabled,
		readonly,
		value,
		checked,
		name: name ?? 'aaaa',
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper">
	<El
		tag="input"
		type="radio"
		{...$$restProps}
		{...otherProps}
		{cssProps}
		on:change
		on:change={() => {
			if (ctx) {
				ctx.update(value)
			}
		}} />
	{#if label}
		<label for="aaaa">{label}</label>
	{/if}
</El>
