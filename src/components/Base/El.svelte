<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { CssProps } from './El.type'

	// default properties
	export let element: any = undefined
	export let cssPrefix: string | undefined = 'el'
	export let tag: keyof HTMLElementTagNameMap | undefined = 'div'
	export let cssProps: Partial<CssProps> = {}

	// background properties
	export let bgColor: BackgroundColors = undefined
	export let bgGradient: BooleanValues = undefined
	export let bgOpacity: Opacities = undefined

	//text
	export let textOpacity: TextOpacities = undefined

	// border properties
	export let border: BorderSizes = undefined
	export let borderTop: BorderSizes = undefined
	export let borderStart: BorderSizes = undefined
	export let borderEnd: BorderSizes = undefined
	export let borderBottom: BorderSizes = undefined
	export let borderColor: Colors = undefined
	export let borderRadius: BorderRadiusPositions = undefined
	export let borderRoundSize: BorderRoundSizes = undefined
	export let borderOpacity: Opacities = undefined

	// padding properties
	export let p: PaddingSizes = undefined
	export let pt: PaddingSizes = undefined
	export let pb: PaddingSizes = undefined
	export let ps: PaddingSizes = undefined
	export let pe: PaddingSizes = undefined
	export let px: PaddingSizes = undefined
	export let py: PaddingSizes = undefined

	// margin properties
	export let m: MarginSizes = undefined
	export let mt: MarginSizes = undefined
	export let mb: MarginSizes = undefined
	export let ms: MarginSizes = undefined
	export let me: MarginSizes = undefined
	export let mx: MarginSizes = undefined
	export let my: MarginSizes = undefined

	// display properties
	export let clearfix: BooleanValues = undefined
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

	// shadow
	export let shadow: ShaddowSizes = undefined

	// sizing
	export let w: Sizes = undefined
	export let h: Sizes = undefined
	export let mw: MaxSizes = undefined
	export let mh: MaxSizes = undefined

	// position
	export let position: PositionsTypes = undefined
	export let top: PositionValues = undefined
	export let start: PositionValues = undefined
	export let bottom: PositionValues = undefined
	export let end: PositionValues = undefined

	// Vertical aligh
	export let vAlign: VerticalAligns = undefined

	// text
	export let color: TextColors = undefined
	export let textAlign: TextAligns = undefined
	export let textAlignSm: TextAligns = undefined
	export let textAlignMd: TextAligns = undefined
	export let textAlignLg: TextAligns = undefined
	export let textAlignXl: TextAligns = undefined
	export let textWrap: TextWraps = undefined
	export let textTransform: TextTransforms = undefined
	export let textDecoration: TextDecorations = undefined
	export let lineHeight: TextLineHeights = undefined
	export let textMuted: BooleanValues = undefined
	export let textLead: BooleanValues = undefined
	export let textHeading: TextHeadings = undefined
	export let textTruncate: BooleanValues = undefined

	// font
	export let fontSize: FontSizes = undefined
	export let fontWeight: FontWeights = undefined
	export let fontStyle: FontStyles = undefined
	export let hidden: BooleanValues = undefined

	// forward events
	export let forwardEvents: (node: HTMLElement) => any = () => ({})
	export let float: FloatPositions = undefined

	// max widths
	export let col: ColSizes = undefined
	export let colSm: ColSizes = undefined
	export let colMd: ColSizes = undefined
	export let colLg: ColSizes = undefined
	export let colXl: ColSizes = undefined
	export let colXxl: ColSizes = undefined

	// order
	export let order: ColOrders = undefined
	export let orderSm: ColOrders = undefined
	export let orderMd: ColOrders = undefined
	export let orderLg: ColOrders = undefined
	export let orderXl: ColOrders = undefined
	export let orderXxl: ColOrders = undefined

	// offset
	export let offset: ColSizes = undefined
	export let offsetSm: ColSizes = undefined
	export let offsetMd: ColSizes = undefined
	export let offsetLg: ColSizes = undefined
	export let offsetXl: ColSizes = undefined
	export let offsetXxl: ColSizes = undefined

	// Row
	export let row: BooleanValues = undefined
	export let rowCol: RowColSizes = undefined
	export let rowColSm: RowColSizes = undefined
	export let rowColMd: RowColSizes = undefined
	export let rowColLg: RowColSizes = undefined
	export let rowColXl: RowColSizes = undefined
	export let rowColXxl: RowColSizes = undefined

	// Row gutters
	export let g: RowGutterSizes = undefined
	export let gSm: RowGutterSizes = undefined
	export let gMd: RowGutterSizes = undefined
	export let gLg: RowGutterSizes = undefined
	export let gXl: RowGutterSizes = undefined
	export let gXxl: RowGutterSizes = undefined
	export let gx: RowGutterSizes = undefined
	export let gy: RowGutterSizes = undefined

	let classes: string | undefined
	let defaultCssProps: CssProps
	let defaultCssPrefix: string = 'el'

	$: {
		forwardEvents = forwardEventsBuilder(get_current_component())
		defaultCssProps = {
			// background properties
			bgColor,
			bgGradient,
			bgOpacity,
			// border properties
			border,
			borderTop,
			borderStart,
			borderEnd,
			borderBottom,
			borderColor,
			borderRadius,
			borderRoundSize,
			borderOpacity,
			// padding properties
			p,
			pt,
			pb,
			ps,
			pe,
			px,
			py,
			// margin properties
			m,
			mt,
			mb,
			ms,
			me,
			mx,
			my,
			// display properties
			clearfix,
			ratio,
			sticky,
			fixed,
			display,
			displaySm,
			displayMd,
			displayLg,
			displayXl,
			displayXxl,
			print,
			// shadow
			shadow,
			// sizing
			w,
			h,
			mw,
			mh,
			// position
			position,
			top,
			start,
			bottom,
			end,
			// vertical align
			vAlign,
			// text
			color,
			textAlign,
			textAlignSm,
			textAlignMd,
			textAlignLg,
			textAlignXl,
			textWrap,
			textTransform,
			textDecoration,
			lineHeight,
			textMuted,
			textLead,
			textHeading,
			textTruncate,
			textOpacity,
			// fonts
			fontSize,
			fontWeight,
			fontStyle,
			hidden,
			float,
			// col layout
			col,
			colSm,
			colMd,
			colLg,
			colXl,
			colXxl,
			// Col Order
			order,
			orderSm,
			orderMd,
			orderLg,
			orderXl,
			orderXxl,
			// Col Offset
			offset,
			offsetSm,
			offsetMd,
			offsetLg,
			offsetXl,
			offsetXxl,
			//Row
			row,
			rowCol,
			rowColSm,
			rowColMd,
			rowColLg,
			rowColXl,
			rowColXxl,
			// gutter
			g,
			gSm,
			gMd,
			gLg,
			gXl,
			gXxl,
			gx,
			gy,
		}
		classes = classname(defaultCssPrefix, defaultCssProps, '', true)
		if (cssPrefix) classes += ' ' + classname(cssPrefix, cssProps, $$props.class, true)
	}
</script>

<svelte:element this={tag} use:forwardEvents bind:this={element} {...$$restProps} class={classes}>
	<slot />
</svelte:element>
