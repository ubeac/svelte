<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import type { Colors } from '$lib/types'
	import { classname, createOptions } from '$lib/utils'

	import Checkbox from './Checkbox.svelte'

	/**
	 * Set the color of checkbox when it is checked
	 */
	export let color: Colors = 'primary'

	/**
	 * Set checkbox group to show in a row
	 */
	export let inline: boolean = false

	/**
	 * The key in the items that each checkbox is related to
	 */
	export let key: string = 'key'

	/**
	 * Checkbox group items
	 */
	export let items: Array<any> | Object = undefined

	/**
	 * Set the field that should be used as each checkbox label
	 */
	export let text: string = 'text'

	/**
	 * Value that selected checkboxes are bound to
	 */
	export let value: Array<any> = undefined

	const dispatch = createEventDispatcher()

	function change(checked: any, option: any) {
		const filtered = value?.filter((key) => key !== getKey(option)) ?? []
		if (checked) {
			value = filtered.concat([getKey(option)])
		} else {
			value = filtered
		}
		dispatch('change', value)
	}

	$: ({ options, getKey, getText, isSelected } = createOptions({ items, key, text }))
	$: classes = classname('checkbox-group', { inline }, $$props.class, true)
</script>

<div class={classes}>
	{#each $options as option}
		<Checkbox
			label={getText(option)}
			value={isSelected(option, value)}
			disabled={option.disabled}
			{color}
			on:change={(x) => {
				change(x.detail, option)
			}} />
	{/each}
</div>
