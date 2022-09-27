<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { Radio } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import { FormField, FormHint } from '.'
	import { Label } from '../label'

	/**
	 * Set Column width
	 */
	export let cols: string | number | boolean = '12'

	/**
	 * Set id for HTML element
	 */
	export let id: string = 'form-radio-' + nanoid(10)

	/**
	 * Show Message at bottom of Input
	 */
	export let message: string | undefined = undefined

	/**
	 * Mark this as required field in form
	 */
	export let required: boolean = false

	/**
	 * Color of Radio button
	 */
	export let color: Colors = 'default'

	/**
	 * Align multiple Radio buttons in a single horizontal line
	 */
	export let inline: boolean = false

	/**
	 * Label of Radio button
	 */
	export let label: string | undefined = undefined

	/**
	 * Forwards All native events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Set text of radio
	 */
	export let text: string | undefined = undefined

	/**
	 * Value of Radio
	 */
	export let value: boolean = false

	$: classes = classname('form-radio', {}, $$props.class)
</script>

<FormField {cols} class={classes}>
	<slot name="label">
		{#if label}
			<Label for={id} {required}>{label}</Label>
		{/if}
	</slot>
	<Radio bind:value {id} {forwardEvents} {color} {inline} {text} {...$$restProps} />
	<slot name="message">
		{#if message}
			<FormHint>{message}</FormHint>
		{/if}
	</slot>
</FormField>
