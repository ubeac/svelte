<script lang="ts">
	import { El } from '../Base'
	import Checkbox from './Checkbox.svelte'
	import type { CheckboxGroupProps } from './Checkbox.types'

	type $$Props = CheckboxGroupProps

	/**
	 * Set color for the selected Checkbox's background color
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set Css Prefix for the CheckboxGroup
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'checkbox-group'

	/**
	 * Set inline to sohw inline Checkboxes
	 */
	export let inline: $$Props['inline'] = undefined

	/**
	 * Array of items to be bound to the Checkboxes
	 */
	export let items: $$Props['items'] = undefined

	/**
	 * The value of CheckboxGroup
	 */
	export let value: $$Props['value'] = []

	let element: HTMLElement

	$: checkboxProps = {
		inline,
		name: element?.id,
		color,
	}

	function onChange(option: any) {
		if (value!.includes(option)) {
			value = value?.filter((val) => val !== option)
		} else {
			value = [...value!, option]
		}
	}
</script>

<El {cssPrefix} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index}
			<Checkbox {...checkboxProps} value={value?.includes(item)} on:change={() => onChange(item)}>
				<slot {index} {item}>{item}</slot>
			</Checkbox>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
