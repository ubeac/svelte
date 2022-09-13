<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@ubeac/svelte/directives'
	import { nanoid } from 'nanoid'

	import { FormRadio } from '$lib/components'
	import type { Colors } from '$lib/types'
	import { classname, createOptions } from '$lib/utils'

	/**
	 * Set Color of RadioGroup
	 */
	export let color: Colors = 'default'

	/**
	 * Forwards All native events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Set View of RadioGroup
	 */
	export let inline: boolean = false

	/**
	 * Select items
	 */
	export let items: any = []

	/**
	 * Set the field that selected options are bound to
	 */
	export let key: string = 'value'

	/**
	 * Set name of RadioGroup
	 */
	export let name: string = 'radio-group-' + nanoid(5)

	/**
	 * Set the field that should be used as each option label
	 */
	export let text: string = 'text'

	/**
	 * Value that selected radio text is bound to
	 */
	export let value: number | string | undefined = undefined

	const dispatch = createEventDispatcher()

	function onChange(checked: any, option: any) {
		if (checked) value = getKey(option)
		dispatch('changed', value)
	}

	$: ({ options, getKey, getText, isSelected } = createOptions({ items, key, text }))

	$: classes = classname('radio-group', {}, $$props.class)
</script>

<div class={classes} role="radiogroup">
	{#each $options as option}
		<FormRadio
			{forwardEvents}
			{name}
			{color}
			{inline}
			value={isSelected(option, value)}
			label={getText(option)}
			on:changed={({ detail }) => onChange(detail, option)}
		/>
	{/each}
</div>
