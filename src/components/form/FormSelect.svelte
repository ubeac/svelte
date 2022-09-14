<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormField, FormHint, Label, Select } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Set column width of component
	 */
	export let cols: string | number | boolean = '12'

	/**
	 * Sets id for HTML component
	 */
	export let id: string | undefined = nanoid(10)

	/**
	 * Set label for select component
	 */
	export let label: string | undefined = undefined

	/**
	 * Show Message at bottom of Input
	 */
	export let message: string | undefined = undefined

	/**
	 * Mark this as required field in form
	 */
	export let required: boolean = false

	/**
	 * Value of selcted option
	 */
	export let value: any = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-select', undefined, $$props.class, true)
</script>

<FormField {cols} class={classes}>
	<slot name="label">
		{#if label}
			<Label for="form-select-{id}" {required}>{label}</Label>
		{/if}
	</slot>
	<div class={classname('form-field-body')}>
		<Select id="form-select-{id}" {forwardEvents} {...$$restProps} bind:value />
	</div>
	<slot name="message">
		{#if message}
			<FormHint>{message}</FormHint>
		{/if}
	</slot>
</FormField>
