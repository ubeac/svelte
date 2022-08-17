<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Input, Label, Spinner } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Set Column width
	 */
	export let col: string | undefined = undefined

	/**
	 * Sets an icon inside component
	 */
	export let icon: string | undefined = undefined

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

{#if condition($$props)}
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
		<Input bind:value {id} {forwardEvents} {...$$restProps} />
		<svelte:fragment slot="inner:end">
			{#if loading}
				<Spinner />
			{/if}
			<slot name="inner:end" />
		</svelte:fragment>
		<slot name="middle:end" slot="middle:end" />
		<slot name="outer:end" slot="outer:end" />
	</FormGroup>
{/if}
