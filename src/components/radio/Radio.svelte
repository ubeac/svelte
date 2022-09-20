<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Radio color
	 */
	export let color: Colors = 'default'

	/**
	 * Description for Radio button
	 */
	export let description: string | undefined = undefined

	/**
	 * Description Color for Radio button
	 */
	export let descriptionColor: Colors = 'default'

	let id: string = nanoid()

	/**
	 * Radio name
	 */
	export let name: string | undefined = undefined

	/**
	 * Set text of radio
	 */
	export let text: string | undefined = undefined

	/**
	 * Radio checked status
	 */
	export let value: boolean | undefined = undefined

	const dispatch = createEventDispatcher()

	function change(event: any) {
		value = event.target.checked
		dispatch('changed', value)
	}

	$: classes = classname('radio', undefined, $$props.class, true)
</script>

<div class={classes}>
	<input
		type="radio"
		{name}
		{value}
		{id}
		checked={value}
		use:forwardEvents
		{...$$restProps}
		class={classname('radio-input', { color }, undefined, true)}
		on:change={change} />
	<label for={id} class={classname('radio-label')}>
		<slot>
			{text}
		</slot>
	</label>
	{#if description || $$slots['description']}
		<div class={classname('radio-description')}>
			<slot name="description">
				{description}
			</slot>
		</div>
	{/if}
</div>
