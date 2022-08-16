<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import type {
		GridAlignContents,
		GridAlignItems,
		GridGutters,
		GridJustifyContents,
		GridReverse,
		GridVertical,
		GridWrap,
	} from './Grid.types'

	/**
	 * Aligns contents vertically across all rows (It overrides alignItems).
	 */
	export let alignContent: GridAlignContents = 'normal'

	/**
	 * Aligns contents vertically across all rows for extra-small display sizes
	 * (It overrides alignItemsXs).
	 */
	export let alignContentXs: GridAlignContents = 'normal'

	/**
	 * Aligns contents vertically across all rows for small display sizes
	 * (It overrides alignItemsSm).
	 */
	export let alignContentSm: GridAlignContents = 'normal'

	/**
	 * Aligns contents vertically across all rows for medium display sizes
	 * (It overrides alignItemsMd).
	 */
	export let alignContentMd: GridAlignContents = 'normal'

	/**
	 * Aligns contents vertically across all rows for large display sizes
	 * (It overrides alignItemsLg).
	 */
	export let alignContentLg: GridAlignContents = 'normal'

	/**
	 * Aligns contents vertically across all rows for extra-large display sizes
	 * (It overrides alignItemsXl).
	 */
	export let alignContentXl: GridAlignContents = 'normal'

	/**
	 * Aligns contents vertically across all rows for extra-extra-large display sizes
	 * (It overrides alignItemsXXl).
	 */
	export let alignContentXxl: GridAlignContents = 'normal'

	/**
	 * Aligns contents vertically inside their own row.
	 */
	export let alignItems: GridAlignItems = 'normal'

	/**
	 * Aligns contents vertically inside their own row for extra-small display sizes.
	 */
	export let alignItemsXs: GridAlignItems = 'normal'

	/**
	 * Aligns contents vertically inside their own row for small display sizes.
	 */
	export let alignItemsSm: GridAlignItems = 'normal'

	/**
	 * Aligns contents vertically inside their own row for medium display sizes.
	 */
	export let alignItemsMd: GridAlignItems = 'normal'

	/**
	 * Aligns contents vertically inside their own row for large display sizes.
	 */
	export let alignItemsLg: GridAlignItems = 'normal'

	/**
	 * Aligns contents vertically inside their own row for extra-large display sizes.
	 */
	export let alignItemsXl: GridAlignItems = 'normal'

	/**
	 * Aligns contents vertically inside their own row for extra-extra-large display sizes.
	 */
	export let alignItemsXxl: GridAlignItems = 'normal'

	/**
	 * Adds a gap between contents to make space between them vertically and horizontally.
	 */
	export let gutter: GridGutters = 'none'

	/**
	 * Adds a gap between contents to make space between them horizontally.
	 */
	export let gutterX: GridGutters = 'none'

	/**
	 * Adds a gap between contents to make space between them vertically.
	 */
	export let gutterY: GridGutters = 'none'

	/**
	 * Justifies contents horizontally.
	 */
	export let justifyContent: GridJustifyContents = 'normal'

	/**
	 * Justifies contents horizontally for extra-small display sizes.
	 */
	export let justifyContentXs: GridJustifyContents = 'normal'

	/**
	 * Justifies contents horizontally for small display sizes.
	 */
	export let justifyContentSm: GridJustifyContents = 'normal'

	/**
	 * Justifies contents horizontally for medium display sizes.
	 */
	export let justifyContentMd: GridJustifyContents = 'normal'

	/**
	 * Justifies contents horizontally for large display sizes.
	 */
	export let justifyContentLg: GridJustifyContents = 'normal'

	/**
	 * Justifies contents horizontally for extra-large display sizes.
	 */
	export let justifyContentXl: GridJustifyContents = 'normal'

	/**
	 * Justifies contents horizontally for extra-extra-large display sizes.
	 */
	export let justifyContentXxl: GridJustifyContents = 'normal'

	/**
	 * Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.
	 */
	export let reverse: GridReverse = false

	/**
	 * Changes the flow of contents from left-to-right to top-to-down.
	 */
	export let vertical: GridVertical = false

	/**
	 * Controls allowing the container to wrap the content or not if the cumulative width
	 * size of contents is more than the twelve-column width.
	 */
	export let wrap: GridWrap = true

	/**
	 * Controls allowing the container to wrap the content or not if the cumulative width
	 * size of contents is more than the twelve-column width for extra-small screen devices.
	 */
	export let wrapXs: GridWrap = false

	/**
	 * Controls allowing the container to wrap the content or not if the cumulative width
	 * size of contents is more than the twelve-column width for small screen devices.
	 */
	export let wrapSm: GridWrap = false

	/**
	 * Controls allowing the container to wrap the content or not if the cumulative width
	 * size of contents is more than the twelve-column width for medium screen devices.
	 */
	export let wrapMd: GridWrap = false

	/**
	 * Controls allowing the container to wrap the content or not if the cumulative width
	 * size of contents is more than the twelve-column width for large screen devices.
	 */
	export let wrapLg: GridWrap = false

	/**
	 * Controls allowing the container to wrap the content or not if the cumulative width
	 * size of contents is more than the twelve-column width for extra-large screen devices.
	 */
	export let wrapXl: GridWrap = false

	/**
	 * Controls allowing the container to wrap the content or not if the cumulative width
	 * size of contents is more than the twelve-column width for extra-extra-large screen devices.
	 */
	export let wrapXxl: GridWrap = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'grid',
		{
			alignContent,
			alignContentXs,
			alignContentSm,
			alignContentMd,
			alignContentLg,
			alignContentXl,
			alignContentXxl,
			alignItems,
			alignItemsXs,
			alignItemsSm,
			alignItemsMd,
			alignItemsLg,
			alignItemsXl,
			alignItemsXxl,
			gutter,
			gutterX,
			gutterY,
			justifyContent,
			justifyContentXs,
			justifyContentSm,
			justifyContentMd,
			justifyContentLg,
			justifyContentXl,
			justifyContentXxl,
			reverse,
			vertical,
			wrap,
			wrapXs,
			wrapSm,
			wrapMd,
			wrapLg,
			wrapXl,
			wrapXxl,
		},
		$$props.class,
		true
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<div>
			<slot />
		</div>
	</div>
{/if}
