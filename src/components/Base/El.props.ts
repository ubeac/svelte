import type { CssProps, ElProps } from './El.type'

export const DefualtTagName: keyof HTMLElementTagNameMap = 'div'
export const DefaultCssPrefix = 'el'

export const DefaultCssProps: CssProps = {
	bgColor: undefined,
	bgGradient: undefined,
	bgOpacity: undefined,

	border: undefined,
	borderTop: undefined,
	borderStart: undefined,
	borderEnd: undefined,
	borderBottom: undefined,
	borderColor: undefined,
	borderRadius: undefined,
	borderRoundSize: undefined,
	borderOpacity: undefined,

	p: undefined,
	pt: undefined,
	pb: undefined,
	ps: undefined,
	pe: undefined,
	px: undefined,
	py: undefined,

	m: undefined,
	mt: undefined,
	mb: undefined,
	ms: undefined,
	me: undefined,
	mx: undefined,
	my: undefined,

	clearfix: undefined,
	ratio: undefined,
	sticky: undefined,
	fixed: undefined,
	display: undefined,
	displaySm: undefined,
	displayMd: undefined,
	displayLg: undefined,
	displayXl: undefined,
	displayXxl: undefined,
	print: undefined,
	shadow: undefined,
	w: undefined,
	h: undefined,
	mw: undefined,
	mh: undefined,
	// position
	position: undefined,
	top: undefined,
	start: undefined,
	bottom: undefined,
	end: undefined,
	// aligh
	vAlign: undefined,
	color: undefined,
	textAlign: undefined,
	textAlignSm: undefined,
	textAlignMd: undefined,
	textAlignLg: undefined,
	textAlignXl: undefined,
	textWrap: undefined,
	textTransform: undefined,
	textDecoration: undefined,
	lineHeight: undefined,
	textMuted: undefined,
	textLead: undefined,
	textHeading: undefined,
	textTruncate: undefined,
	fontSize: undefined,
	fontWeight: undefined,
	fontStyle: undefined
}

export const DefaultProps: ElProps<'div'> = {
	element: undefined,
	cssPrefix: undefined,
	tag: 'div',
	cssProps: undefined,
	...DefaultCssProps
}
