<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Removes border between Rows.
	 */
	export let border: boolean = false

	/**
	 * Change the background color of Row on mouse hover.
	 */
	export let hover: boolean = false

	/**
	 * Set different background color for even and odd rows.
	 */
	export let striped: boolean = false

	/**
	 * Disable wraping text inside Cells.
	 */
	export let wrap: boolean = false
	/**
	 * Set table size
	 */
	export let size: 'sm' | 'md' = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'table',
		{
			border,
			hover,
			striped,
			wrap,
			size,
		},
		$$props.class
	)
</script>

<div class={classname('table-parent')}>
	<table use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</table>
</div>
