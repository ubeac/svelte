<script lang="ts">
	import { getContext } from 'svelte'

	import { type DropdownContext, type DropdownItemsProps, El } from '$lib/components'

	type $$Props = DropdownItemsProps

	/**
	 * Set Css Prefix for the Dropdown items
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown-items'

	/**
	 * Set Dropdown items to be shown as dark
	 */
	export let dark: $$Props['dark'] = undefined

	/**
	 * Set Dropdown items to be shown as dark
	 */
	export let dropdownAlignment: $$Props['dropdownAlignment'] = undefined
	export let dropdownAlignmentXs: $$Props['dropdownAlignment'] = undefined
	export let dropdownAlignmentSm: $$Props['dropdownAlignment'] = undefined
	export let dropdownAlignmentMd: $$Props['dropdownAlignment'] = undefined
	export let dropdownAlignmentLg: $$Props['dropdownAlignment'] = undefined
	export let dropdownAlignmentXl: $$Props['dropdownAlignment'] = undefined
	export let dropdownAlignmentXxl: $$Props['dropdownAlignment'] = undefined

	let element: HTMLElement

	const ctx = getContext<DropdownContext>('DROPDOWN')

	$: margin = $ctx.margin

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			dark,
			dropdownAlignment,
			dropdownAlignmentXs,
			dropdownAlignmentSm,
			dropdownAlignmentMd,
			dropdownAlignmentLg,
			dropdownAlignmentXl,
			dropdownAlignmentXxl,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

{#if $ctx.show}
	<El {...$$restProps} {...otherProps} {cssProps} style="transform: translate(0px, {margin}px);" bind:element>
		<slot />
	</El>
{/if}
