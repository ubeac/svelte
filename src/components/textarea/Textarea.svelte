<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Disables Textarea
	 */
	export let disabled: boolean = false

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Set placeholder of Textarea
	 */
	export let placeholder: string | undefined = undefined

	/**
	 * Makes value unchangable
	 */
	export let readOnly: boolean = false

	/**
	 * Set number of rows
	 */
	export let rows: number | string | undefined = undefined

	/**
	 * The text content of Textarea
	 */
	export let value: string | undefined = undefined

	$: classes = classname('textarea', {}, $$props.class)
</script>

<textarea bind:value use:forwardEvents {disabled} {placeholder} {readOnly} {rows} {...$$restProps} class={classes} />
