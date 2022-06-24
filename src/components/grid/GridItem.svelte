<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

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
	 * Hides the grid-item in all display sizes.
	 */
	export let hide: GridItemHide = undefined

	/**
	 * Hides the grid-item in extra-small display sizes (portrait phones).
	 */
	export let hideXs: GridItemHide = undefined

	/**
	 * Hides the grid-item in small display sizes (landscape phones).
	 */
	export let hideSm: GridItemHide = undefined

	/**
	 * Hides the grid-item in medium display sizes (tablets).
	 */
	export let hideMd: GridItemHide = undefined

	/**
	 * Hides the grid-item in large display sizes (desktop).
	 */
	export let hideLg: GridItemHide = undefined

	/**
	 * Hides the grid-item in extra-large display sizes (large desktops).
	 */
	export let hideXl: GridItemHide = undefined

	/**
	 * Hides the grid-item in extra-extra-large display sizes (larger desktops).
	 */
	export let hideXxl: GridItemHide = undefined

	/**
	 * Hides the grid-item in small and larger display sizes.
	 */
	export let hideSmUp: GridItemHide = undefined

	/**
	 * Hides the grid-item in medium and larger display sizes.
	 */
	export let hideMdUp: GridItemHide = undefined

	/**
	 * Hides the grid-item in large and larger display sizes.
	 */
	export let hideLgUp: GridItemHide = undefined

	/**
	 * Hides the grid-item in large and larger display sizes.
	 */
	export let hideXlUp: GridItemHide = undefined

	/**
	 * Hides the grid-item in small and smaller display sizes.
	 */
	export let hideSmDown: GridItemHide = undefined

	/**
	 * Hides the grid-item in medium and smaller display sizes.
	 */
	export let hideMdDown: GridItemHide = undefined

	/**
	 * Hides the grid-item in large and smaller display sizes.
	 */
	export let hideLgDown: GridItemHide = undefined

	/**
	 * Hides the grid-item in large and smaller display sizes.
	 */
	export let hideXlDown: GridItemHide = undefined

	/**
	 * Hides the grid-item in large and smaller display sizes.
	 */
	export let hideXxlDown: GridItemHide = undefined

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
			hide,
			hideXs,
			hideSm,
			hideMd,
			hideLg,
			hideXl,
			hideXxl,
			hideSmUp,
			hideMdUp,
			hideLgUp,
			hideXlUp,
			hideSmDown,
			hideMdDown,
			hideLgDown,
			hideXlDown,
			hideXxlDown,
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

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
