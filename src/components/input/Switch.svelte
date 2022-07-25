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
	export let value: boolean | undefined = undefined

	$: classes = classname('switch', undefined, $$props.class)
</script>

{#if condition($$props)}
	<label class={classes}>
		<input bind:checked={value} use:forwardEvents {...$$restProps} type="checkbox" />
	</label>
{/if}
