<script lang="ts">
	import { Checkbox, type CheckboxGroupProps, El } from '$lib/components/index.js'

	type $$Props = CheckboxGroupProps

	//#region Props

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
	 * Put your checkboxes on the opposite side with reverse property.
	 */
	export let reverse: $$Props['reverse'] = undefined

	/**
	 * The value of CheckboxGroup
	 */
	export let value: $$Props['value'] = undefined

	//#endregion

	let element: HTMLElement

	$: checkboxProps = {
		inline,
		name: element?.id,
		color,
		reverse,
	}

	function onChange(event: any) {
		if (value === undefined) value = []

		if (items != undefined && items?.length > 0) {
			const selectedIndex = event.target?.value
			const selectedChecked = event.target?.checked
			if (selectedChecked) {
				value.push(items[selectedIndex])
			} else {
				var _index = value.indexOf(items[selectedIndex])
				if (_index !== -1) {
					value.splice(_index, 1)
				}
			}
			value = value
		}
	}
</script>

<El {cssPrefix} bind:element {...$$restProps}>
	{#if items}
		{#each items as item, index (index)}
			<Checkbox {...checkboxProps} value={index} checked={value?.includes(item)} on:change={onChange}>
				<slot {index} {item}>{item}</slot>
			</Checkbox>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
