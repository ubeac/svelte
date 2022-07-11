<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Label, Spinner, Textarea } from '$lib/components'
	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Set column width of Textarea
	 */
	export let col: string | undefined = undefined

	/**
	 * Show an icon inside component
	 */
	export let icon: string | undefined = undefined

	/**
	 * Set id for HTML element
	 */
	export let id: string | undefined = nanoid(10)

	/**
	 * Set label for Textarea
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
	 * The text content of textarea
	 */
	export let value: any = undefined

	const forwardEvents = forwardEventsBuilderNew(get_current_component())

	$: classes = classname('form-textarea', null, $$props.class)
</script>

{#if condition($$props)}
	<FormGroup {col} class={classes}>
		<svelte:fragment slot="label">
			{#if label}
				<Label for={id} {required}>{label}</Label>
			{/if}
		</svelte:fragment>
		<svelte:fragment slot="inner:start">
			{#if icon}
				<Icon name={icon} />
			{/if}
			<slot name="inner:start" />
		</svelte:fragment>
		<Textarea bind:value {id} {forwardEvents} {...$$restProps} />
		<svelte:fragment slot="inner:end">
			{#if loading}
				<Spinner />
			{/if}
			<slot name="inner:end" />
		</svelte:fragment>
	</FormGroup>
{/if}
