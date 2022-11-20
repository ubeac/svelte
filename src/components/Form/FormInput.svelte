<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Input, Label, Spinner } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import { FormHint } from '.'
	import FormField from './FormField.svelte'

	/**
	 * Set Column width
	 */
	export let cols: string | number | boolean = '12'

	/**
	 * Sets an icon inside component
	 */
	export let icon: string | undefined = undefined

	/**
	 * Sets an icon inside component
	 */
	export let iconEnd: string | undefined = undefined

	/**
	 * Set id for HTML element
	 */
	export let id: string | undefined = nanoid(10)

	/**
	 * Set Label for input
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
	 * Mark this as required field in form
	 */
	export let required: boolean = false

	/**
	 * The content of input
	 */
	export let value: any = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-input', undefined, $$props.class)
</script>

<FormField {cols} class={classes}>
	<slot name="label">
		{#if label}
			<Label for="form-input-{id}" {required}>{label}</Label>
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
		<Input id="form-input-{id}" {required} {forwardEvents} {...$$restProps} bind:value />
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
