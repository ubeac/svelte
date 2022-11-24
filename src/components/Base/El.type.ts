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
	textColor: TextColors
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
	textOpacity: TextOpacities

	// font
	fontSize: FontSizes
	fontWeight: FontWeights
	fontStyle: FontStyles

	//Visibility
	hidden: BooleanValues
	// Float
	float: FloatPositions
	floatSm: FloatPositions
	floatMd: FloatPositions
	floatLg: FloatPositions
	floatXl: FloatPositions
	floatXxl: FloatPositions

	// Col
	col: ColSizes
	colSm: ColSizes
	colMd: ColSizes
	colLg: ColSizes
	colXl: ColSizes
	colXxl: ColSizes

	// Col Order
	order: ColOrders
	orderSm: ColOrders
	orderMd: ColOrders
	orderLg: ColOrders
	orderXl: ColOrders
	orderXxl: ColOrders

	//Col Offset
	offset: ColSizes
	offsetSm: ColSizes
	offsetMd: ColSizes
	offsetLg: ColSizes
	offsetXl: ColSizes
	offsetXxl: ColSizes

	// Row
	row: BooleanValues
	rowCol: RowColSizes
	rowColSm: RowColSizes
	rowColMd: RowColSizes
	rowColLg: RowColSizes
	rowColXl: RowColSizes
	rowColXxl: RowColSizes

	// Gutter
	g: RowGutterSizes
	gSm: RowGutterSizes
	gMd: RowGutterSizes
	gLg: RowGutterSizes
	gXl: RowGutterSizes
	gXxl: RowGutterSizes
	gx: RowGutterSizes
	gy: RowGutterSizes
}

export interface ElProps extends CssProps {
	class?: string
	tag: keyof HTMLElementTagNameMap
	element: any // TODO: this should be something like SvelteComponent or C
	cssPrefix?: string
	cssProps?: any
	[key: string]: any // used when we pass props to DOM Elements using ...$$restProps
}
