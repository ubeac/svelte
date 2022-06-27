<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * TODO
	 */
	export let forwardEvents = forwardEventsBuilderNew(get_current_component())

	/**
	 * TODO
	 */
	export let items: Array<any> | Object | undefined = undefined

	/**
	 * TODO
	 */
	export let key: string | undefined = undefined

	/**
	 * TODO
	 */
	export let preview: boolean = false

	/**
	 * TODO
	 */
	export let text: string | undefined = undefined

	/**
	 * TODO
	 */
	export let value: any = undefined

	const dispatch = createEventDispatcher()

	$: classes = classname('select', { preview }, $$props.class)

	$: ({ options, getId, getText, getValue, toId } = createOptions({ items, key, text }))

	function change(event: any) {
		dispatch('changed', (value = getValue(event.target.value)))
	}
</script>

{#if condition($$props)}
	{#if preview}
		<div {...$$restProps} class={classes}>
			{value}
		</div>
	{:else}
		<select value={toId(value)} on:change={change} use:forwardEvents {...$$restProps} class={classes}>
			{#if $$props.placeholder}
				<option disabled selected value="">{$$props.placeholder}</option>
			{/if}
			{#each $options as option}
				<option value={getId(option)}>
					{getText(option)}
				</option>
			{/each}
		</select>
	{/if}
{/if}
