<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | undefined
	type AlignContent = 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | undefined
	type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | undefined
	type Gutter = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string | undefined

	/**
	 * TODO
	 */
	export let alignItems: AlignItems = 'stretch'

	/**
	 * Set alignItems for screens larger than 'xs' breakpoint
	 */
	export let alignItemsXs: AlignItems = undefined

	/**
	 * Set alignItems for screens larger than 'sm' breakpoint
	 */
	export let alignItemsSm: AlignItems = undefined

	/**
	 * Set alignItems for screens larger than 'md' breakpoint
	 */
	export let alignItemsMd: AlignItems = undefined

	/**
	 * Set alignItems for screens larger than 'lg' breakpoint
	 */
	export let alignItemsLg: AlignItems = undefined

	/**
	 * Set alignItems for screens larger than 'xl' breakpoint
	 */
	export let alignItemsXl: AlignContent = undefined

	/**
	 * Set alignItems for screens larger than 'xxl' breakpoint
	 */
	export let alignItemsXxl: AlignContent = undefined

	/**
	 * TODO:
	 */
	export let alignContent: AlignContent = 'start'

	/**
	 * Set alignContent for screens larger than 'xs' breakpoint
	 */
	export let alignContentXs: AlignContent = undefined

	/**
	 * Set alignContent for screens larger than 'sm' breakpoint
	 */
	export let alignContentSm: AlignContent = undefined

	/**
	 * Set alignContent for screens larger than 'md' breakpoint
	 */
	export let alignContentMd: AlignContent = undefined

	/**
	 * Set alignContent for screens larger than 'lg' breakpoint
	 */
	export let alignContentLg: AlignContent = undefined
	/**
	 * Set alignContent for screens larger than 'xl' breakpoint
	 */
	export let alignContentXl: AlignContent = undefined

	/**
	 * Set alignContent for screens larger than 'xxl' breakpoint
	 */
	export let alignContentXxl: AlignContent = undefined

	/**
	 * TODO
	 */
	export let gutter: Gutter = 'md'

	/**
	 * TODO
	 */
	export let gutterX: Gutter = undefined

	/**
	 * TODO
	 */
	export let gutterY: Gutter = undefined

	/**
	 * TODO:
	 */
	export let justifyContent: JustifyContent = 'start'

	/**
	 * Apply justifyContent for screens larger than 'xs' breakpoint
	 */
	export let justifyContentXs: JustifyContent = undefined

	/**
	 * Apply justifyContent for screens larger than 'sm' breakpoint
	 */
	export let justifyContentSm: JustifyContent = undefined

	/**
	 * Apply justifyContent for screens larger than 'md' breakpoint
	 */
	export let justifyContentMd: JustifyContent = undefined

	/**
	 * Apply justifyContent for screens larger than 'lg' breakpoint
	 */
	export let justifyContentLg: JustifyContent = undefined

	/**
	 * Apply justifyContent for screens larger than 'xl' breakpoint
	 */
	export let justifyContentXl: JustifyContent = undefined

	/**
	 * Apply justifyContent for screens larger than 'xxl' breakpoint
	 */
	export let justifyContentXxl: JustifyContent = undefined

	/**
	 * Align Items from Right to Left or bottom to top if vertical is enabled.
	 */
	export let reverse: boolean = false

	/**
	 * Apply reverse for screens larger than 'xs' breakpoint.
	 */
	export let reverseXs: boolean = false

	/**
	 * Apply reverse for screens larger than 'sm' breakpoint.
	 */
	export let reverseSm: boolean = false

	/**
	 * Apply reverse for screens larger than 'md' breakpoint.
	 */
	export let reverseMd: boolean = false

	/**
	 * Apply reverse for screens larger than 'lg' breakpoint.
	 */
	export let reverseLg: boolean = false

	/**
	 * Apply reverse for screens larger than 'xl' breakpoint.
	 */
	export let reverseXl: boolean = false

	/**
	 * Apply reverse for screens larger than 'xxl' breakpoint.
	 */
	export let reverseXxl: boolean = false

	/**
	 * Align items vertically
	 */
	export let vertical: boolean = false

	/**
	 * Move overflowing items to next line
	 */
	export let wrap: boolean | 'reverse' = false

	/**
	 * Apply wrap for screens larger than 'xs' breakpoint
	 */
	export let wrapXs: boolean | 'reverse' = false

	/**
	 * Apply wrap for screens larger than 'sm' breakpoint
	 */
	export let wrapSm: boolean | 'reverse' = false

	/**
	 * Apply wrap for screens larger than 'md' breakpoint
	 */
	export let wrapMd: boolean | 'reverse' = false

	/**
	 * Apply wrap for screens larger than 'lg' breakpoint
	 */
	export let wrapLg: boolean | 'reverse' = false

	/**
	 * Apply wrap for screens larger than 'xl' breakpoint
	 */
	export let wrapXl: boolean | 'reverse' = false

	/**
	 * Apply wrap for screens larger than 'xxl' breakpoint
	 */
	export let wrapXxl: boolean | 'reverse' = false

	// TODO: use gutter, gutterX, gutterY in classes

	$: classes = {
		[`align-items-${alignItems}`]: true,
		[`align-items-xs-${alignItemsXs}`]: !!alignItemsXs,
		[`align-items-sm-${alignItemsSm}`]: !!alignItemsSm,
		[`align-items-md-${alignItemsMd}`]: !!alignItemsMd,
		[`align-items-lg-${alignItemsLg}`]: !!alignItemsLg,
		[`align-items-xl-${alignItemsXl}`]: !!alignItemsXl,
		[`align-items-xxl-${alignItemsXxl}`]: !!alignItemsXxl,
		[`align-content-${alignContent}`]: true,
		[`align-content-xs-${alignContentXs}`]: !!alignContentXs,
		[`align-content-sm-${alignContentSm}`]: !!alignContentSm,
		[`align-content-md-${alignContentMd}`]: !!alignContentMd,
		[`align-content-lg-${alignContentLg}`]: !!alignContentLg,
		[`align-content-xl-${alignContentXl}`]: !!alignContentXl,
		[`align-content-xxl-${alignContentXxl}`]: !!alignContentXxl,
		[`justify-content-${justifyContent}`]: true,
		[`justify-content-xs-${justifyContentXs}`]: !!justifyContentXs,
		[`justify-content-sm-${justifyContentSm}`]: !!justifyContentSm,
		[`justify-content-md-${justifyContentMd}`]: !!justifyContentMd,
		[`justify-content-lg-${justifyContentLg}`]: !!justifyContentLg,
		[`justify-content-xl-${justifyContentXl}`]: !!justifyContentXl,
		[`justify-content-xxl-${justifyContentXxl}`]: !!justifyContentXxl,
		'horizontal': !vertical,
		reverse,
		'reverse-xs': !!reverseXs,
		'reverse-sm': !!reverseSm,
		'reverse-md': !!reverseMd,
		'reverse-lg': !!reverseLg,
		'reverse-xl': !!reverseXl,
		'reverse-xxl': !!reverseXxl,
		vertical,
		'wrap': wrap === true,
		'wrap-reverse': wrap === 'reverse',
		'wrap-xs': wrapXs === true,
		'wrap-xs-reverse': wrapXs === 'reverse',
		'wrap-sm': wrapSm === true,
		'wrap-sm-reverse': wrapSm === 'reverse',
		'wrap-md': wrapMd === true,
		'wrap-md-reverse': wrapMd === 'reverse',
		'wrap-lg': wrapLg === true,
		'wrap-lg-reverse': wrapLg === 'reverse',
		'wrap-xl': wrapXl === true,
		'wrap-xl-reverse': wrapXl === 'reverse',
		'wrap-xxl': wrapXxl === true,
		'wrap-xxl-reverse': wrapXxl === 'reverse',
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="Grid" {...$$restProps}>
	<slot />
</Root>
