<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { Checkbox } from '../input'

	/**
	 * TODO
	 */
	export let id = nanoid(10)

	/**
	 * Aligns multiple elements in same line
	 */
	export let inline: boolean | undefined = undefined

	/**
	 * Set label for checkbox
	 */
	export let label: string | undefined = undefined

	/**
	 * TODO
	 */
	export let required: boolean | undefined = undefined

	/**
	 * The checked state of checkbox
	 */
	export let value: boolean | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-checkbox', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<label for={id} use:forwardEvents {required} class={classes}>
		<Checkbox {id} on:change bind:value {required} {...$$restProps} />
		{#if label}
			<span class={classname('form-checkbox-label')}>{label}</span>
		{/if}
	</label>
{/if}
