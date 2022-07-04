<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Disable wraping text inside Cells.
	 */
	export let wrap: boolean | undefined = undefined

	/**
	 * Set different background color for even and odd rows.
	 */
	export let striped: boolean | undefined = undefined

	/**
	 * Change the background color of Row on mouse hover.
	 */
	export let hover: boolean | undefined = undefined

	/**
	 * Removes border between Rows.
	 */
	export let border: boolean | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'table',
		{
			wrap,
			striped,
			hover,
			border,
		},
		null,
		$$props.class
	)
</script>

{#if condition($$props)}
	<div class={classname('table-parent')}>
		<table use:forwardEvents {...$$restProps} class={classes}>
			<slot />
		</table>
	</div>
{/if}
