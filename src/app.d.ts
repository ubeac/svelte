/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare type BooleanValues = boolean | undefined

// Spinner
declare type SpinnerSizes = 'small' | 'large' | undefined
declare type SpinnerShapes = 'border' | 'grow'

// Theme Colors
declare type ThemeColors =
	| undefined
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'

declare type NamedColors =
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
	| 'black'
	| 'white'
	| 'transparent'
	| undefined

declare type SocialMediaColors =
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
	| undefined

declare type Colors = ThemeColors | NamedColors | SocialMediaColors

declare type TextColors = Colors

declare type BackgroundColors = ThemeColors | NamedColors | 'body'

declare type Opacities = '10' | '25' | '50' | '75' | undefined
declare type TextOpacities = '25' | '50' | '75' | undefined

// Display
declare type DisplayRatioTypes = '1x1' | '4x3' | '16x9' | '21x9' | undefined
declare type DisplayStickyTypes = 'top' | 'sm-top' | 'md-top' | 'lg-top' | 'xl-top' | undefined
declare type DisplayFixedTypes = 'top' | 'bottom' | undefined
declare type DisplayTypes =
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
declare type ShaddowSizes = 'none' | 'sm' | 'lg' | boolean | undefined

// width sizes
declare type Sizes = '25' | '50' | '75' | '100' | 'auto' | undefined
declare type MaxSizes = '100' | undefined

// position
declare type PositionsTypes = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | undefined
declare type PositionValues = '0' | '50' | '100' | undefined

// border
declare type BorderSizes = '0' | '1' | '2' | '3' | '4' | '5' | BooleanValues | undefined
declare type BorderRoundSizes = '0' | '1' | '2' | '3' | undefined
declare type BorderRadiusPositions = 'top' | 'end' | 'bottom' | 'start' | 'circle' | 'pill' | undefined

// padding
declare type PaddingSizes = '0' | '1' | '2' | '3' | '4' | '5' | undefined
declare type PaddingPositions = 'top' | 'end' | 'bottom' | 'start' | 'x' | 'y' | undefined

// margin
declare type MarginSizes = '0' | '1' | '2' | '3' | '4' | '5' | 'auto' | undefined
declare type MarginPositions = 'top' | 'end' | 'bottom' | 'start' | 'x' | 'y' | undefined

// gap
declare type GapSizes = '0' | '1' | '2' | '3' | '4' | '5' | undefined

// Font
declare type FontSizes = '1' | '2' | '3' | '4' | '5' | '6' | undefined
declare type FontStyles = 'italic' | 'normal' | undefined
declare type HeadingDisplaySizes = '1' | '2' | '3' | '4' | '5' | '6' | undefined

declare type FontWeights = 'light' | 'lighter' | 'normal' | 'bold' | 'semibold' | 'bolder' | undefined

// Text
declare type TextAligns = 'start' | 'end' | 'center' | undefined
declare type TextWraps = 'wrap' | 'nowrap' | 'break' | undefined
declare type TextLineHeights = '1' | 'sm' | 'base' | 'lg' | undefined
declare type TextDecorations = 'none' | 'underline' | 'line-through' | undefined
declare type TextTransforms = 'lowercase' | 'uppercase' | 'capitalize' | undefined
declare type TextHeadings = '1' | '2' | '3' | '4' | '5' | '6' | undefined
declare type OverflowTypes = 'auto' | 'hidden' | 'visible' | 'scroll' | undefined
declare type TranslateMiddleTypes = 'x' | 'y' | 'xy' | undefined
declare type FloatPositions = 'start' | 'end' | 'none' | undefined

// Vertical align
declare type VerticalAligns = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top' | undefined

// Col Sizes and settings
type ColSizes = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | undefined | boolean
type ColOrders = '1' | '2' | '3' | '4' | '5' | 'first' | 'last' | undefined

// Container Sizes and settings
type ContainerMaxWidths = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' | undefined

// Row sizes and settings
type RowColSizes = '1' | '2' | '3' | '4' | '5' | undefined
type RowGutterSizes = '0' | '1' | '2' | '3' | '4' | '5' | undefined

declare type HTMLTags =
	| 'a'
	| 'abbr'
	| 'address'
	| 'area'
	| 'article'
	| 'aside'
	| 'audio'
	| 'b'
	| 'base'
	| 'bdi'
	| 'bdo'
	| 'blockquote'
	| 'body'
	| 'br'
	| 'button'
	| 'canvas'
	| 'caption'
	| 'cite'
	| 'code'
	| 'col'
	| 'colgroup'
	| 'data'
	| 'datalist'
	| 'dd'
	| 'del'
	| 'details'
	| 'dfn'
	| 'dialog'
	| 'div'
	| 'dl'
	| 'dt'
	| 'em'
	| 'embed'
	| 'fieldset'
	| 'figcaption'
	| 'figure'
	| 'footer'
	| 'form'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'head'
	| 'header'
	| 'hgroup'
	| 'hr'
	| 'html'
	| 'i'
	| 'iframe'
	| 'img'
	| 'input'
	| 'ins'
	| 'kbd'
	| 'label'
	| 'legend'
	| 'li'
	| 'link'
	| 'main'
	| 'map'
	| 'mark'
	| 'menu'
	| 'meta'
	| 'meter'
	| 'nav'
	| 'noscript'
	| 'object'
	| 'ol'
	| 'optgroup'
	| 'option'
	| 'output'
	| 'p'
	| 'picture'
	| 'pre'
	| 'progress'
	| 'q'
	| 'rp'
	| 'rt'
	| 'ruby'
	| 's'
	| 'samp'
	| 'script'
	| 'section'
	| 'select'
	| 'slot'
	| 'small'
	| 'source'
	| 'span'
	| 'strong'
	| 'style'
	| 'sub'
	| 'summary'
	| 'sup'
	| 'table'
	| 'tbody'
	| 'td'
	| 'template'
	| 'textarea'
	| 'tfoot'
	| 'th'
	| 'thead'
	| 'time'
	| 'title'
	| 'tr'
	| 'track'
	| 'u'
	| 'ul'
	| 'var'
	| 'video'
	| 'wbr'
