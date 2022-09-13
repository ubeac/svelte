<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { FormCheckbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors, Items } from '$lib/types'
	import { classname, createOptions } from '$lib/utils'

	import { FormField } from '.'
	import { CheckboxGroup } from '../checkbox'
	import { Label } from '../label'

	/**
	 * set column width
	 */
	export let cols: number | string | boolean = false

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Show Checkboxes in horizontal line
	 */
	export let inline: boolean = false

	/**
	 * Checkbox group items
	 */
	export let items: Items = undefined

	/**
	 * The key in the items that each checkbox is related to
	 */
	export let key: string | undefined = 'key'

	/**
	 * Label of the Checkbox group
	 */
	export let label: string | undefined = undefined

	/**
	 * If items is array of objects, you should set text prop to an existing field in objects
	 */
	export let text: string | undefined = 'text'

	/**
	 * Binding result of selected items
	 */
	export let value: any[] = []

	$: classes = classname('form-checkbox-group', undefined, $$props.class, true)
</script>

<FormField {cols} class={classes}>
	<Label if={!!label}>{label}</Label>
	<CheckboxGroup {inline} {items} {key} {text} {forwardEvents} {...$$restProps} />
</FormField>
