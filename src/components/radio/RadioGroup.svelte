<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import { Radio } from '$lib/components'
	import type { Colors } from '$lib/types'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * Set the color of Radios when it is checked
	 */
	export let color: Colors = 'primary'

	/**
	 * Set RadioGroup group to show in a row
	 */
	export let inline: boolean = false

	/**
	 * RadioGroup group items
	 */
	export let items: any[] | Object = []
	/**
	 * The key in the items that each radiogroup is related to
	 */
	export let key: string = 'key'
	/**
	 * Set the field that should be used as each radiogroup label
	 */
	export let text: string = 'text'

	/**
	 * Value that selected RadioGroup is bound to
	 */
	export let value: any = undefined

	const dispatch = createEventDispatcher()

	$: ({ options, getKey, getText, isSelected } = createOptions({ items, key, text }))

	function change(option: any) {
		value = getKey(option)
		dispatch('change', value)
	}

	$: classes = classname('radio-group', { inline }, $$props.class, true)
</script>

{#if condition($$props)}
	<div class={classes}>
		{#each $options as option}
			<Radio
				label={getText(option)}
				value={isSelected(option, value)}
				checked={isSelected(option, value)}
				disabled={option.disabled}
				{color}
				on:change={() => change(option)} />
		{/each}
	</div>
{/if}
