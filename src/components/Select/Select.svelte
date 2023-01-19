<script lang="ts">
	import { El, type SelectProps } from '$lib'

	type $$Props = SelectProps

	/**
	 * Set Css Prefix for the Select
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'select'

	/**
	 * Select items
	 */
	export let items: $$Props['items'] = []

	/**
	 * Set multiple attribute to select
	 */
	export let multiple: $$Props['multiple'] = false

	/**
	 * Value that selected options are bound to
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the selected option
	 */
	export let selected: $$Props['selected'] = undefined

	/**
	 * Set the size of the select component
	 */
	export let selectSize: $$Props['selectSize'] = undefined

	/**
	 * Set size attribute of select
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set select as disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set placeholder for the select
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the size of select
	 */
	export let state: $$Props['state'] = undefined

	let cssProps: any = {}
	let props: any = {}

	$: {
		cssProps = { selectSize, state }

		props = {
			cssPrefix,
			value,
			selected,
			multiple,
			disabled,
			size,
			placeholder,
		}
	}

	const onChange = (event: any) => {
		if (!multiple) {
			const selectedIndex = event.target.value
			value = items && selectedIndex ? items[selectedIndex] : undefined
		} else if (items != undefined && items.length > 0) {
			let options = Array.from(event.target.options)
			value = options
				.filter((x: any) => x.selected)
				.map((x: any) => (items ? items[x.value] : undefined))
				.filter((e) => typeof e !== 'undefined')
		}
	}
</script>

<El tag="select" bind:value {...$$restProps} {...props} {cssProps} on:change={onChange}>
	{#if items}
		{#if !multiple && value == undefined}
			<option disabled selected>{placeholder ? placeholder : ''}</option>
		{/if}
		{#each items as item, index}
			<option value={index} selected={value === item}>
				<slot {index} {item}>{item}</slot>
			</option>
		{/each}
	{:else}
		<slot />
	{/if}
</El>
