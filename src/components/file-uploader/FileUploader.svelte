<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { InputSizes } from './input.types'

    /**
     * Set allowed file types
    */
    export let accept: string | undefined = undefined

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

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
	 * List of selected files.
	 */
	export let value: any = undefined

	$: classes = classname('file-uploader', { size, disabled, readOnly }, $$props.class, true)
</script>

<input type="file" bind:files={value} use:forwardEvents {...$$restProps} {accept} class={classes} {placeholder} {readOnly} {disabled} />
