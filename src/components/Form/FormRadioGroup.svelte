<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import { FormField } from '.'
	import { Label } from '../Label'
	import { RadioGroup } from '../Radio'

	/**
	 * Set Column width
	 */
	export let cols: string | number | boolean = '12'

	/**
	 * Label of radio group.
	 */
	export let label: string | undefined = undefined

	/**
	 * Value of selected radio item.
	 */
	export let value: any | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-radio-group', {}, $$props.class)
</script>

<FormField {cols} class={classes}>
	{#if label}
		<Label>{label}</Label>
	{/if}

	<RadioGroup {forwardEvents} {...$$restProps} bind:value />
</FormField>
