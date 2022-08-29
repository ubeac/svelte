<script lang="ts">
	import { get_current_component, getContext, onDestroy, onMount } from 'svelte/internal'

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
	 * Name of input
	 */
	export let name: string = nanoid(5)

	/**
	 * Mark this as required field in form
	 */
	export let required: boolean = false

	/**
	 * Schema of this field
	 */
	export let schema: any | undefined = undefined

	/**
	 * The content of input
	 */
	export let value: any = undefined

	/**
	 * Message below input
	 */
	export let message: string | undefined = undefined

	export async function validate(schem: any) {
		try {
			if (!schem) return false
			const cleanValue = await schem.validate(value)

			message = undefined
			return cleanValue
		} catch (err: any) {
			message = err.message
		}
	}

	let ref = get_current_component()
	const formContext = getContext<any>('FORM')

	onMount(() => {
		if (formContext) {
			formContext.register(name, ref, schema)
		}
	})

	onDestroy(() => {
		if (formContext) {
			formContext.unregister(name)
		}
	})

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
		<svelte:fragment slot="message">
			{#if message}
				<div class={classname('form-group-message')}>{message}</div>
			{/if}
		</svelte:fragment>
	</FormGroup>
{/if}

<style lang="scss">
	.u-form-group-message {
		padding: 4px 0 8px 0;
		opacity: 0.9;
		color: red;
	}
</style>
