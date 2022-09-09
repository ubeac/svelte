<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@ubeac/svelte/directives'

	import { Radio } from '$lib/components'
	import type { Colors } from '$lib/types'
	import { classname, createOptions } from '$lib/utils'

	interface Item {
		label: string
		value: any
		disabled?: boolean
		checked?: boolean
	}

	/**
	 * Set Color of RadioGroup
	 */
	export let color: Colors = 'default'

	/**
	 * Forward all native Events
	 */
	let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Set View of RadioGroup
	 */
	export let inline: boolean = false

	/**
	 * Set List of Items
	 */
	export let items: Item[] = []

	/**
	 * The key in the items that each checkbox is related to
	 */
	export let key: string = 'value'

	/**
	 * Set name of RadioGroup
	 */
	export let name: string | undefined = undefined

	/**
	 * Set the field that should be used as each checkbox label
	 */
	export let text: string = 'label'

	$: ({ options, getKey, getText } = createOptions({ items, key, text }))
	$: radioGroupClasses = classname('radio-group', { inline }, $$props.class, true)
	$: slugName = 'radio-group' + Math.random()
</script>

<div class={radioGroupClasses}>
	{#each $options as option}
		<Radio
			{forwardEvents}
			disabled={option.disabled}
			checked={option.checked}
			value={getKey(option)}
			name={slugName}
			label={getText(option)}
			{color} />
	{/each}
</div>
