<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormGroup, Icon, Input, Label, Spinner } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let icon: string | undefined = undefined

	/**
	 * TODO
	 */
	export let id: string = nanoid(10)

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

	export let value: any = undefined

	// const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-input', null, $$props.class)
</script>

{#if condition($$props)}
	<FormGroup col={$$props.col}>
		{#if label}
			<Label for={id} {required}>{label}</Label>
		{/if}
		{#if icon}
			<div class={classname('input-icon')}>
				<Icon name={icon} />
			</div>
		{/if}
		<Input bind:value {id} {required} {...$$restProps} on:change={(e) => console.log(3333, e)} />
		{#if loading}
			<div class={classname('input-icon')}>
				<Spinner />
			</div>
		{/if}
	</FormGroup>
{/if}
