<script lang="ts">
	import { El, type SelectProps } from '$lib/components'

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
	 * Value that selected options are bound to
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * Set the size of the select component
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
	 * Set the state of select
	 */
	export let state: $$Props['state'] = undefined

	let cssProps: any = {}
	let props: any = {}

	$: {
		cssProps = { size, state }

		props = {
			cssPrefix,
			value,
			disabled,
			placeholder,
		}
	}

	const onChange = (event: any) => {
		const selectedIndex = event.target.value
		value = items && selectedIndex ? items[selectedIndex] : undefined
	}
</script>

<El tag="select" bind:value {...$$restProps} {...props} {cssProps} on:change={onChange}>
	{#if items}
		{#if value == undefined}
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
