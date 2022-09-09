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
	 * Applies the align-items css property. Available options are start, center, end, auto, baseline and stretch.
	 */
	export let alignSelf: GridAlignItems | undefined = undefined

	/**
	 * Sets the default number of columns the component extends. Available options are 1 -> 12 and auto.
	 */
	export let cols: boolean | string | number = false

	/**
	 * Changes the number of columns on large and greater breakpoints.
	 */
	export let lg: boolean | string | number = false

	/**
	 * Changes the number of columns on medium and greater breakpoints.
	 */
	export let md: boolean | string | number = false

	/**
	 * Sets the default offset for the column.
	 */
	export let offset: string | number | undefined = undefined

	/**
	 * Changes the offset of the component on large and greater breakpoints.
	 */
	export let offseLg: string | number | undefined = undefined

	/**
	 * Changes the offset of the component on medium and greater breakpoints.
	 */
	export let offsetMd: string | number | undefined = undefined

	/**
	 * Changes the offset of the component on small and greater breakpoints.
	 */
	export let offsetSm: string | number | undefined = undefined

	/**
	 * Changes the offset of the component on extra large and greater breakpoints.
	 */
	export let offsetXl: string | number | undefined = undefined

	/**
	 * Sets the default order for the column.
	 */
	export let order: string | number | undefined = undefined

	/**
	 * Changes the order of the component on large and greater breakpoints.
	 */
	export let orderLg: string | number | undefined = undefined

	/**
	 * Changes the order of the component on medium and greater breakpoints.
	 */
	export let orderMd: string | number | undefined = undefined

	/**
	 * Changes the order of the component on small and greater breakpoints.
	 */
	export let orderSm: string | number | undefined = undefined

	/**
	 * Changes the order of the component on extra large and greater breakpoints.
	 */
	export let orderXl: string | number | undefined = undefined

	/**
	 * Changes the number of columns on small and greater breakpoints.
	 */
	export let sm: boolean | string | number = false

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	/**
	 * Changes the number of columns on extra large and greater breakpoints.
	 */
	export let xl: boolean | string | number = false

	$: classes = classname(
		'col',
		{
			alignSelf,
			cols,
			lg,
			md,
			offset,
			offseLg,
			offsetMd,
			offsetSm,
			offsetXl,
			order,
			orderLg,
			orderMd,
			orderSm,
			orderXl,
			sm,
			xl,
		},
		$$props.class,
		true
	)
</script>

<svelte:element this={tag} use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</svelte:element>
