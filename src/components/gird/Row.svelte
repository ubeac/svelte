<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { GridAlignContent, GridAlignItems, GridJustify } from './grid.types'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Applies the align-items css property. Available options are start, center, end, baseline and stretch.
	 */
	export let align: GridAlignItems | undefined = undefined

	/**
	 * Applies the align-content css property. Available options are start, center, end, space-between, space-around and stretch.
	 */
	export let alignContent: GridAlignContent | undefined = undefined

	/**
	 * Changes the align-content property on large and greater breakpoints.
	 */
	export let alignContentLg: GridAlignContent | undefined = undefined

	/**
	 * Changes the align-content property on medium and greater breakpoints.
	 */
	export let alignContentMd: GridAlignContent | undefined = undefined

	/**
	 * Changes the align-content property on small and greater breakpoints.
	 */
	export let alignContentSm: GridAlignContent | undefined = undefined

	/**
	 * Changes the align-content property on extra large and greater breakpoints.
	 */
	export let alignContentXL: GridAlignContent | undefined = undefined

	/**
	 * Changes the align-items property on large and greater breakpoints.
	 */
	export let alignLg: GridAlignItems | undefined = undefined

	/**
	 * Changes the align-items property on medium  and greater breakpoints.
	 */
	export let alignMd: GridAlignItems | undefined = undefined

	/**
	 * Changes the align-items property on small and greater breakpoints.
	 */
	export let alignSm: GridAlignItems | undefined = undefined

	/**
	 * Changes the align-items property on extera large and greater breakpoints.
	 */
	export let alignXl: GridAlignItems | undefined = undefined

	/**
	 * Reduces the gutter between v-cols.
	 */
	export let dense: boolean = false

	/**
	 * Applies the align-content css property. Available options are start, center, end, space-between, space-around and stretch.
	 */
	export let justify: GridJustify | undefined = undefined

	/**
	 * Changes the justify-content property on large and greater breakpoints.
	 */
	export let justifyLg: GridJustify | undefined = undefined

	/**
	 * Changes the justify-content property on medium and greater breakpoints.
	 */
	export let justifyMd: GridJustify | undefined = undefined

	/**
	 * Changes the justify-content property on small and greater breakpoints.
	 */
	export let justifySm: GridJustify | undefined = undefined

	/**
	 * Changes the justify-content property on extra large and greater breakpoints.
	 */
	export let justifyXL: GridJustify | undefined = undefined

	/**
	 * Removes the gutter between v-cols.
	 */
	export let noGutters: boolean = false

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	$: classes = classname(
		'row',
		{
			align,
			alignContent,
			alignContentLg,
			alignContentMd,
			alignContentSm,
			alignContentXL,
			alignLg,
			alignMd,
			alignSm,
			alignXl,
			dense,
			justify,
			justifyLg,
			justifyMd,
			justifySm,
			justifyXL,
			noGutters,
		},
		$$props.class,
		true
	)
</script>

<svelte:element this={tag} use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</svelte:element>
