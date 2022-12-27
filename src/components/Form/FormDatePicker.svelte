<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { DatePicker, FormField, FormHint, Icon, Label, Spinner } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Sets column width
	 */
	export let cols: string | number | false = '12'

	/**
	 * Sets an icon for the Component
	 */
	export let icon: string | undefined = undefined

	/**
	 * Sets an icon at right side of the Component
	 */
	export let iconEnd: string | undefined = undefined

	/**
	 * Sets id for HTML element
	 */
	export let id: string | undefined

	/**
	 * Sets label for Date Picker
	 */
	export let label: string | undefined = undefined

	/**
	 * Show loading indicator inside component
	 */
	export let loading: boolean = false

	/**
	 * Show a message below of component
	 */
	export let message: string | undefined = undefined

	/**
	 * Mark this as a required field in form
	 */
	export let required: boolean = false

	/**
	 * Selected date value
	 */
	export let value: any = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-datepicker', undefined, $$props.class)
</script>

<FormField {cols} class={classes}>
	<slot name="label">
		{#if label}
			<Label for="form-datepicker-{id}" {required}>{label}</Label>
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
		<DatePicker bind:value id="form-datepicker-{id}" {required} {forwardEvents} {...$$restProps} />
		<slot name="end">
			{#if iconEnd}
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
