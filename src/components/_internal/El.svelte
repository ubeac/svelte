<script lang="ts">
	import { BaseHtmlElement } from '$lib/components'

	import type {
		BackgroundColorTypes,
		BooleanTypes,
		BorderRadiusTypes,
		BorderRoundSizeValues,
		BorderSizeValues,
		ColorTypes,
		OpacityTypes,
	} from './box.types'

	// background properties
	export let bgColor: BackgroundColorTypes | undefined = undefined
	export let bgGradient: BooleanTypes | undefined = undefined
	export let bgOpacity: OpacityTypes | undefined = undefined

	// border properties
	export let border: BorderSizeValues | undefined = undefined
	export let borderTop: BorderSizeValues | undefined = undefined
	export let borderStart: BorderSizeValues | undefined = undefined
	export let borderEnd: BorderSizeValues | undefined = undefined
	export let borderBottom: BorderSizeValues | undefined = undefined
	export let borderColor: ColorTypes | undefined = undefined
	export let borderRadius: BorderRadiusTypes | undefined = undefined
	export let borderRoundSize: BorderRoundSizeValues | undefined = undefined

	type DisplayRatioTypes = '1x1' | '4x3' | '16x9' | '21x9' | undefined
	type DisplayStickyTypes = 'top' | 'sm-top' | 'md-top' | 'lg-top' | 'xl-top' | undefined
	type DisplayFixedTypes = 'top' | 'bottom' | undefined
	type DisplayTypes =
		| 'none'
		| 'inline'
		| 'inline-block'
		| 'block'
		| 'grid'
		| 'table-cell'
		| 'table-row'
		| 'flex'
		| 'inline-flex'
		| 'table'
		| undefined

	type ShaddowTypes = 'none' | 'sm' | 'lg' | undefined
	type SizeTypes = '25' | '50' | '75' | '100' | '100vp' | 'auto' | undefined
	type PositionTypes = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | undefined
	type PositionValues = '0' | '50' | '100' | undefined

	export let clearfix: boolean | undefined = undefined
	export let ratio: DisplayRatioTypes = undefined
	export let sticky: DisplayStickyTypes = undefined
	export let fixed: DisplayFixedTypes = undefined
	export let display: DisplayTypes = undefined
	export let displaySm: DisplayTypes = undefined
	export let displayMd: DisplayTypes = undefined
	export let displayLg: DisplayTypes = undefined
	export let displayXl: DisplayTypes = undefined
	export let displayXxl: DisplayTypes = undefined
	export let print: DisplayTypes = undefined
	export let shadow: ShaddowTypes = undefined
	export let width: SizeTypes = undefined
	export let height: SizeTypes = undefined

	export let position: PositionTypes = undefined
	export let top: PositionValues = undefined
	export let start: PositionValues = undefined
	export let bottom: PositionValues = undefined
	export let end: PositionValues = undefined

	let cssProps = {
		clearfix,
		ratio,
		position,
		sticky,
		fixed,
		display,
		print,
		displaySm,
		displayMd,
		displayLg,
		displayXl,
		displayXxl,
		shadow,
		width,
		height,
		top,
		start,
		end,
		bottom,
		border,
		borderBottom,
		borderEnd,
		borderStart,
		borderTop,
		borderColor,
		borderRoundSize,
		borderRadius,
		bgColor,
		bgOpacity,
		bgGradient,
	}
</script>

<BaseHtmlElement {...$$restProps} cssPrefix="el" {cssProps}>
	<slot />
</BaseHtmlElement>
