<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import type { InputSizes } from './input.types'

	/**
	 * Forward all native Events
	 */
	const forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Set the input disabled
	 */
	export let disabled: boolean = false

	/**
	 * Set placeholder for the input
	 */
	export let placeholder: string | undefined = undefined

	/**
	 * Set the input read only
	 */
	export let readOnly: boolean = false

	/**
	 * Set the size of input
	 */
	export let size: InputSizes = 'md'

	/**
	 * the text Value of input
	 */
	export let value: any = undefined

	$: classes = classname('input', { size, disabled, readOnly }, $$props.class, true)
</script>

{#if condition($$props)}
	<input bind:value use:forwardEvents {...$$restProps} class={classes} {placeholder} {readOnly} {disabled} />
{/if}
