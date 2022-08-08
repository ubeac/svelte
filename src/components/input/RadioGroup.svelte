<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Checked state of Checkbox
	 */
	export let value: string | undefined = undefined
	export let column: boolean = false
	export let row: boolean = false
	$: radioGroupClasses = classname('radio-group', { column, row }, $$props.class)
	let ch
</script>

{#if condition($$props)}
	<div class={radioGroupClasses}>
		<slot />
	</div>
{/if}
