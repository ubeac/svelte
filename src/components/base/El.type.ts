import type { ComponentType, SvelteComponent } from 'svelte'

export interface CssProps {
	// background properties
	bgColor: BackgroundColors
	bgGradient: BooleanValues
	bgOpacity: Opacities

	// border properties
	border: BorderSizes
	borderTop: BorderSizes
	borderStart: BorderSizes
	borderEnd: BorderSizes
	borderBottom: BorderSizes
	borderColor: Colors
	borderRadius: BorderRadiusPositions
	borderRoundSize: BorderRoundSizes
	borderOpacity: Opacities

	// padding properties
	p: PaddingSizes
	pt: PaddingSizes
	pb: PaddingSizes
	ps: PaddingSizes
	pe: PaddingSizes
	px: PaddingSizes
	py: PaddingSizes

	// margin properties
	m: MarginSizes
	mt: MarginSizes
	mb: MarginSizes
	ms: MarginSizes
	me: MarginSizes
	mx: MarginSizes
	my: MarginSizes

	// display properties
	clearfix: BooleanValues
	ratio: DisplayRatioTypes
	sticky: DisplayStickyTypes
	fixed: DisplayFixedTypes
	display: DisplayTypes
	displaySm: DisplayTypes
	displayMd: DisplayTypes
	displayLg: DisplayTypes
	displayXl: DisplayTypes
	displayXxl: DisplayTypes
	print: DisplayTypes

	// shadow
	shadow: ShaddowSizes

	// sizing
	w: Sizes
	h: Sizes
	mw: MaxSizes
	mh: MaxSizes

	// position
	position: PositionsTypes
	top: PositionValues
	start: PositionValues
	bottom: PositionValues
	end: PositionValues

	// Vertical aligh
	vAlign: VerticalAligns

	// text
	color: TextColors
	textAlign: TextAligns
	textAlignSm: TextAligns
	textAlignMd: TextAligns
	textAlignLg: TextAligns
	textAlignXl: TextAligns
	textWrap: TextWraps
	textTransform: TextTransforms
	textDecoration: TextDecorations
	lineHeight: TextLineHeights
	textMuted: BooleanValues
	textLead: BooleanValues
	textHeading: TextHeadings
	textTruncate: BooleanValues

	// font
	fontSize: FontSizes
	fontWeight: FontWeights
	fontStyle: FontStyles
}

export interface ElProps<T extends keyof HTMLElementTagNameMap = 'div'> extends CssProps {
	tag: T
	element: any // TODO: this should be something like SvelteComponent or C
	cssPrefix?: string
	cssProps?: any
}

export type ElInternal<
	T extends keyof HTMLElementTagNameMap = 'div',
	C extends ComponentType<SvelteComponent> = ComponentType<SvelteComponent>
> = {
	component: C
	props: ElProps<T>
}

export interface SharedProps extends Partial<ElProps<HTMLTags>> {
	class?: string
	[key: string]: any // used when we pass props to DOM Elements using ...$$restProps
}
