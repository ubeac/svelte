<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { Autocomplete, FormField, FormHint, Icon, Label, Spinner } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Set Column width
	 */
	export let cols: string | number | boolean = '12'

	/**
	 * Sets an icon for the Component
	 */
	export let icon: string | undefined = undefined

	/**
	 * Sets an icon inside component
	 */
	export let iconEnd: string | undefined = undefined

	/**
	 * Sets id for HTML element
	 */
	export let id: string = nanoid(10)

	/**
	 * Sets label for Autocomplete
	 */
	export let label: string | undefined = undefined

	/**
	 * Show loading indicator inside component
	 */
	export let loading: boolean = false

	/**
	 * Show Message at bottom of Input
	 */
	export let message: string | undefined = undefined

	/**
	 * Marks this as required field in form
	 */
	export let required: boolean = false

	/**
	 * Selected option
	 */
	export let value: any = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-autocomplete', undefined, $$props.class)
</script>

<FormField {cols} class={classes}>
	<slot name="label">
		{#if label}
			<Label for="form-autocomplete-{id}" {required}>{label}</Label>
		{/if}
	</slot>
	<div class={classname('form-field-body')}>
		<slot name="start">
			{#if icon}
				<span class={classname('form-field-icon')}>
					<Icon name={icon} />
				</span>
			{/if}
		</slot>
		<Autocomplete bind:value id="form-autocomplete-{id}" {required} {forwardEvents} {...$$restProps} on:changed />
		<slot name="end">
			{#if iconEnd && !loading}
				<span class={classname('form-field-icon')}>
					<Icon name={iconEnd} />
				</span>
			{/if}
			{#if loading}
				<span class={classname('form-field-icon')}>
					<Spinner />
				</span>
			{/if}
		</slot>
	</div>
	<slot name="message">
		{#if message}
			<FormHint>{message}</FormHint>
		{/if}
	</slot>
</FormField>
