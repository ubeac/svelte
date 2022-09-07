<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { Autocomplete, FormGroup, Icon, Label, Spinner } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Set Column width of component between 1 - 12 columns
	 */
	export let col: string | undefined = undefined

	/**
	 * Sets an icon for the Component
	 */
	export let icon: string | undefined = undefined

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

<FormGroup {col} class={classes}>
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
	<Autocomplete bind:value {id} {forwardEvents} {...$$restProps} on:changed />
	<svelte:fragment slot="inner:end">
		{#if loading}
			<Spinner />
		{/if}
		<slot name="inner:end" />
	</svelte:fragment>
	<slot name="middle:end" slot="middle:end" />
	<slot name="outer:end" slot="outer:end" />
</FormGroup>
