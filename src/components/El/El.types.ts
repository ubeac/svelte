export type BooleanValues = boolean | undefined

// Theme Colors
export type ThemeColors =
	| undefined
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'

export type NamedColors =
	| 'blue'
	| 'azure'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'red'
	| 'orange'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'teal'
	| 'cyan'
	| undefined

export type SocialMediaColors =
	| 'facebook'
	| 'twitter'
	| 'google'
	| 'youtube'
	| 'vimeo'
	| 'dribbble'
	| 'github'
	| 'instagram'
	| 'pinterest'
	| 'vk'
	| 'rss'
	| 'flickr'
	| 'bitbucket'
	| 'linkedin'
	| 'tabler'
	| undefined

export type Colors = ThemeColors | NamedColors | SocialMediaColors

export type TextColors = Colors

export type BackgroundColors = ThemeColors | NamedColors | SocialMediaColors | 'body'

export type Opacities = '10' | '25' | '50' | '75' | undefined
export type TextOpacities = '25' | '50' | '75' | undefined

// Display
export type DisplayRatioTypes = '1x1' | '4x3' | '16x9' | '21x9' | undefined
export type DisplayStickyTypes = 'top' | 'sm-top' | 'md-top' | 'lg-top' | 'xl-top' | undefined
export type DisplayFixedTypes = 'top' | 'bottom' | undefined
export type DisplayTypes =
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

// shadow
export type ShaddowSizes = 'none' | 'sm' | 'lg' | boolean | undefined

// width sizes
export type Sizes = '25' | '50' | '75' | '100' | 'auto' | undefined
export type MaxSizes = '100' | undefined

// position
export type PositionsTypes = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | undefined
export type PositionValues = '0' | '50' | '100' | undefined

// border
export type BorderSizes = '0' | '1' | '2' | '3' | '4' | '5' | BooleanValues | undefined
export type BorderRoundSizes = '0' | '1' | '2' | '3' | undefined
export type BorderRadiusPositions = 'top' | 'end' | 'bottom' | 'start' | 'circle' | 'pill' | undefined

// padding
export type PaddingSizes = '0' | '1' | '2' | '3' | '4' | '5' | undefined
export type PaddingPositions = 'top' | 'end' | 'bottom' | 'start' | 'x' | 'y' | undefined

// margin
export type MarginSizes = '0' | '1' | '2' | '3' | '4' | '5' | 'auto' | undefined
export type MarginPositions = 'top' | 'end' | 'bottom' | 'start' | 'x' | 'y' | undefined

// gap
export type GapSizes = '0' | '1' | '2' | '3' | '4' | '5' | undefined

// Font
export type FontSizes = '1' | '2' | '3' | '4' | '5' | '6' | undefined
export type FontStyles = 'italic' | 'normal' | undefined
export type HeadingDisplaySizes = '1' | '2' | '3' | '4' | '5' | '6' | undefined

export type FontWeights = 'light' | 'lighter' | 'normal' | 'bold' | 'semibold' | 'bolder' | undefined

// Text
export type TextAligns = 'start' | 'end' | 'center' | undefined
export type TextWraps = 'wrap' | 'nowrap' | 'break' | undefined
export type TextLineHeights = '1' | 'sm' | 'base' | 'lg' | undefined
export type TextDecorations = 'none' | 'underline' | 'line-through' | undefined
export type TextTransforms = 'lowercase' | 'uppercase' | 'capitalize' | undefined
export type TextHeadings = '1' | '2' | '3' | '4' | '5' | '6' | undefined
export type OverflowTypes = 'auto' | 'hidden' | 'visible' | 'scroll' | undefined
export type TranslateMiddleTypes = 'x' | 'y' | 'xy' | undefined
export type FloatPositions = 'start' | 'end' | 'none' | undefined

// Vertical align
export type VerticalAligns = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top' | undefined

// Col Sizes and settings
export type ColSizes =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| 'auto'
	| undefined
	| boolean
export type ColOrders = '1' | '2' | '3' | '4' | '5' | 'first' | 'last' | undefined
export type OffsetSizes =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| 'auto'
	| undefined

// Container Sizes and settings
export type ContainerMaxWidths = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' | undefined

// Row sizes and settings
export type RowColSizes = '1' | '2' | '3' | '4' | '5' | '6' | 'auto' | undefined
export type RowGutterSizes = '0' | '1' | '2' | '3' | '4' | '5' | undefined

// Align items
export type AlignItemsTypes = 'start' | 'end' | 'center' | undefined

export type AlignSelfTypes = 'start' | 'end' | 'center' | undefined

export type JustifyContentTypes = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | undefined

// HTML Tags
export type HTMLTags = keyof HTMLElementTagNameMap

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

	// gaps
	gap: GapSizes

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

	// container
	container?: ContainerMaxWidths

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
	offset: OffsetSizes
	offsetSm: OffsetSizes
	offsetMd: OffsetSizes
	offsetLg: OffsetSizes
	offsetXl: OffsetSizes
	offsetXxl: OffsetSizes

	// Row
	row?: boolean | 'deck'
	rowCols: RowColSizes
	rowColsSm: RowColSizes
	rowColsMd: RowColSizes
	rowColsLg: RowColSizes
	rowColsXl: RowColSizes
	rowColsXxl: RowColSizes

	// Gutter
	g: RowGutterSizes
	gSm: RowGutterSizes
	gMd: RowGutterSizes
	gLg: RowGutterSizes
	gXl: RowGutterSizes
	gXxl: RowGutterSizes
	gx: RowGutterSizes
	gy: RowGutterSizes

	// Align Items
	alignItems: AlignItemsTypes
	alignSelf: AlignSelfTypes

	// Justify Content
	justifyContent: JustifyContentTypes
}

export interface ElProps extends CssProps {
	id?: string
	class?: string
	tag?: HTMLTags
	element?: HTMLElement
	cssPrefix?: string
	cssProps?: Record<string, any>
	style?: any
	[key: string]: any // used when we pass props to DOM Elements using ...$$restProps
}
