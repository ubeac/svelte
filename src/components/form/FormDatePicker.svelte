<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { DatePicker, FormGroup, Icon, Label, Spinner } from '$lib/components'
	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let col: string | undefined = undefined

	/**
	 * TODO
	 */
	export let icon: string | undefined = undefined

	/**
	 * TODO
	 */
	export let id: string | undefined = nanoid(10)

	/**
	 * TODO
	 */
	export let label: string | undefined = undefined

	/**
	 * TODO
	 */
	export let loading: boolean = false

	/**
	 * TODO
	 */
	export let required: boolean = false

	/**
	 * TODO
	 */
	export let value: any = undefined

	const forwardEvents = forwardEventsBuilderNew(get_current_component())

	$: classes = classname('form-input', null, $$props.class)
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
		<DatePicker bind:value {id} {forwardEvents} {...$$restProps} />
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
