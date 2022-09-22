<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { Checkbox } from '$lib/components'
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
	 * Set color of checkbox
	 */
	export let color: Colors = 'default'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 *  Binding result of selected items
	 */
	export let group: any = []

	/**
	 * Set id for HTML element
	 */
	export let id: string | undefined = nanoid(10)

	/**
	 * Show multiple Checkboxes in same horozontal line
	 */
	export let inline: boolean = false

	/**
	 * Value of checkbox in group
	 */
	export let key: string | undefined = undefined

	/**
	 * label for Form checkbox
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
	 * Set text of checkbox
	 */
	export let text: string | undefined = undefined

	/**
	 * Show checked state of checkbox
	 */
	export let value: boolean = false

	$: classes = classname('form-checkbox', {}, $$props.class, true)
</script>

<FormField {cols} class={classes}>
	<slot name="label">
		{#if label}
			<Label for="form-checkbox-{id}" {required}>{label}</Label>
		{/if}
	</slot>
	<Checkbox bind:value id="form-checkbox-{id}" {forwardEvents} {inline} {key} {color} {text} {...$$restProps}>
		<slot />
	</Checkbox>
	<slot name="message">
		{#if message}
			<FormHint>{message}</FormHint>
		{/if}
	</slot>
</FormField>
