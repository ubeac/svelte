<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { Switch } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
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
	export let id: string | undefined = nanoid(10)

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
	 * Description of Switch
	 */
	export let description: string | undefined = undefined

	/**
	 * The color of escription
	 */
	export let descriptionColor: string | undefined = undefined

	/**
	 * Show multiple Switches in same horozontal line
	 */
	export let inline: boolean = false

	/**
	 * label for FormSwitch
	 */
	export let label: string | undefined = undefined
	/**
	 * Set text of Switch
	 */
	export let text: string | undefined = undefined

	/**
	 * Set checked state of Switch
	 */
	export let value: boolean | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-switch', { inline }, $$props.class)
</script>

<FormField {cols} class={classes}>
	<slot name="label">
		{#if label}
			<Label for="form-switch-{id}" {required}>{label}</Label>
		{/if}
	</slot>
	<Switch bind:value {text} {color} {description} {descriptionColor} {forwardEvents} {...$$restProps} />
	<slot name="message">
		{#if message}
			<FormHint>{message}</FormHint>
		{/if}
	</slot>
</FormField>
