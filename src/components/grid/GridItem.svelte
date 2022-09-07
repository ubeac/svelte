<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { GridItemAlignSelf, GridItemColumn, GridItemHide, GridItemOffset, GridItemOrder } from './GridItem.types'

	/**
	 * Aligns the grid-item vertically in its container (grid).
	 * It overrides the align-items property of its parent.
	 */
	export let alignSelf: GridItemAlignSelf = undefined

	/**
	 * Aligns the grid-item vertically in its container (grid) for extra-small display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 * (It overrides the align-items property of its parent just for extra-small breakpoints).
	 */
	export let alignSelfXs: GridItemAlignSelf = undefined

	/**
	 * Aligns the grid-item vertically in its container (grid) for small display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 * (It overrides the align-items property of its parent just for small breakpoints).
	 */
	export let alignSelfSm: GridItemAlignSelf = undefined

	/**
	 * Aligns the grid-item vertically in its container (grid) for medium display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 * (It overrides the align-items property of its parent just for medium breakpoints).
	 */
	export let alignSelfMd: GridItemAlignSelf = undefined

	/**
	 * Aligns the grid-item vertically in its container (grid) for large display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 * (It overrides the align-items property of its parent just for large breakpoints).
	 */
	export let alignSelfLg: GridItemAlignSelf = undefined

	/**
	 * Aligns the grid-item vertically in its container (grid) for extra-large display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 * (It overrides the align-items property of its parent just for extra-large breakpoints).
	 */
	export let alignSelfXl: GridItemAlignSelf = undefined

	/**
	 * Aligns the grid-item vertically in its container (grid) for extra-extra-large display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 * (It overrides the align-items property of its parent just for extra-extra-large breakpoints).
	 */
	export let alignSelfXxl: GridItemAlignSelf = undefined

	/**
	 * TODO: same as xs
	 */
	export let col: GridItemColumn = undefined

	/**
	 * Specifies the number of columns for extra-small viewports (portrait phones).
	 * It also determines the number of columns for bigger display sizes when
	 * other upper breakpoints (sm, md, lg, xl and xxl) are not specified.
	 */
	export let xs: GridItemColumn = undefined

	/**
	 * Specifies the number of columns for small viewports (landscape phones).
	 * It also determines the number of columns for bigger display sizes when
	 * other upper breakpoints (md, lg, xl and xxl) are not specified.
	 */
	export let sm: GridItemColumn = undefined

	/**
	 * Specifies the number of columns for medium viewports (tablets).
	 * It also determines the number of columns for bigger display sizes when
	 * other upper breakpoints (lg, xl and xxl) are not specified.
	 */
	export let md: GridItemColumn = undefined

	/**
	 * Specifies the number of columns for large viewports (desktop).
	 * It also determines the number of columns for bigger display sizes when
	 * the upper breakpoint (xl and xxl) is not specified.
	 */
	export let lg: GridItemColumn = undefined

	/**
	 * Specifies the number of columns for large viewports (large desktops).
	 * It also determines the number of columns for bigger display sizes when
	 * the upper breakpoint (xxl) is not specified.
	 */
	export let xl: GridItemColumn = undefined

	/**
	 * Specifies the number of columns for extra-extra-large viewports (larger desktops).
	 */
	export let xxl: GridItemColumn = undefined

	/**
	 * TODO: same as offsetXs
	 */
	export let offset: GridItemOffset = undefined

	/**
	 * Adds an offset space before the grid-item for extra-small display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 */
	export let offsetXs: GridItemOffset = undefined

	/**
	 * Adds an offset space before the grid-item for small display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 */
	export let offsetSm: GridItemOffset = undefined

	/**
	 * Adds an offset space before the grid-item for medium display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 */
	export let offsetMd: GridItemOffset = undefined

	/**
	 * Adds an offset space before the grid-item for large display sizes.
	 * It also applies to the larger breakpoint (xl) while that is not specified.
	 */
	export let offsetLg: GridItemOffset = undefined

	/**
	 * Adds an offset space before the grid-item for extra-large display sizes.
	 */
	export let offsetXl: GridItemOffset = undefined

	/**
	 * Adds an offset space before the grid-item for extra-extra-large display sizes.
	 */
	export let offsetXxl: GridItemOffset = undefined

	/**
	 * TODO: same as orderXs
	 */
	export let order: GridItemOrder = undefined

	/**
	 * Overrides the default order of the grid-item for extra-small display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 */
	export let orderXs: GridItemOrder = undefined

	/**
	 * Overrides the default order of the grid-item for small display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 */
	export let orderSm: GridItemOrder = undefined

	/**
	 * Overrides the default order of the grid-item for medium display sizes.
	 * It also applies to larger breakpoints and display sizes while they are not specified.
	 */
	export let orderMd: GridItemOrder = undefined

	/**
	 * Overrides the default order of the grid-item for large display sizes.
	 * It also applies to the larger breakpoint (xl) while that is not specified.
	 */
	export let orderLg: GridItemOrder = undefined

	/**
	 * Overrides the default order of the grid-item for extra-large display sizes.
	 */
	export let orderXl: GridItemOrder = undefined

	/**
	 * Overrides the default order of the grid-item for extra-extra-large display sizes.
	 */
	export let orderXxl: GridItemOrder = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'grid-item',
		{
			alignSelf,
			alignSelfXs,
			alignSelfSm,
			alignSelfMd,
			alignSelfLg,
			alignSelfXl,
			alignSelfXxl,
			col,
			xs,
			sm,
			md,
			lg,
			xl,
			xxl,
			offset,
			offsetXs,
			offsetSm,
			offsetMd,
			offsetLg,
			offsetXl,
			offsetXxl,
			order,
			orderXs,
			orderSm,
			orderMd,
			orderLg,
			orderXl,
			orderXxl,
		},
		$$props.class,
		true
	)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
