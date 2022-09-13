<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormField, Icon, Label, Select, Spinner } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Set column width of component
	 */
	export let cols: string | number | boolean = '12'

	/**
	 * Show an icon inside Select component
	 */
	export let icon: string | undefined = undefined

	/**
	 * Sets id for HTML component
	 */
	export let id: string | undefined = nanoid(10)

	/**
	 * Set label for select component
	 */
	export let label: string | undefined = undefined

	/**
	 * Show a loading indicator
	 */
	export let loading: boolean = false

	/**
	 * Mark this as required field in form
	 */
	export let required: boolean = false

	/**
	 * Value of selcted option
	 */
	export let value: any = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-input', undefined, $$props.class, true)
</script>

<FormField {cols} class={classes}>
	<svelte:fragment slot="label">
		{#if label}
			<Label for={id} {required}>{label}</Label>
		{/if}
	</svelte:fragment>
	<slot name="outer:start" slot="outer:start" />
	<slot name="middle:start" slot="middle:start" />
	<svelte:fragment slot="inner:start">
		{#if icon}
			<Icon name={icon} />
		{/if}
		<slot name="inner:start" />
	</svelte:fragment>
	<Select bind:value {id} {forwardEvents} {...$$restProps} />
	<svelte:fragment slot="inner:end">
		{#if loading}
			<Spinner />
		{/if}
		<slot name="inner:end" />
	</svelte:fragment>
	<slot name="middle:end" slot="middle:end" />
	<slot name="outer:end" slot="outer:end" />
</FormField>
