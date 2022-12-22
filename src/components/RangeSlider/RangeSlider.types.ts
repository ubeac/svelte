import type { ElProps } from '$lib/components'

declare enum PipsType {
	None = -1,
	NoValue = 0,
	LargeValue = 1,
	SmallValue = 2,
}
declare type PipsFilter = (value: number, type: PipsType) => PipsType
declare type Orientations = 'horizontal' | 'vertical'
interface BasePips {
	mode: PipsMode
	density?: number
	filter?: PipsFilter
	format?: PartialFormatter
}
interface PartialFormatter {
	to: (value: number) => string | number
	from?: (value: string) => number | false
}
interface Formatter extends PartialFormatter {
	from: (value: string) => number | false
}
declare enum PipsMode {
	Range = 'range',
	Steps = 'steps',
	Positions = 'positions',
	Count = 'count',
	Values = 'values',
}
interface PositionsPips extends BasePips {
	mode: PipsMode.Positions
	values: number[]
	stepped?: boolean
}
interface ValuesPips extends BasePips {
	mode: PipsMode.Values
	values: number[]
	stepped?: boolean
}
interface CountPips extends BasePips {
	mode: PipsMode.Count
	values: number
	stepped?: boolean
}
interface StepsPips extends BasePips {
	mode: PipsMode.Steps
}
interface RangePips extends BasePips {
	mode: PipsMode.Range
}
declare type Pips = PositionsPips | ValuesPips | CountPips | StepsPips | RangePips
declare type WrappedSubRange = [number] | [number, number]
declare type SubRange = number | WrappedSubRange
export interface Range {
	min: SubRange
	max: SubRange
	[key: `${number}%`]: SubRange
}
export interface RangeSliderProps extends Partial<ElProps> {
	color?: Colors
	value?: any
	//items?: any[]
	startValue?: any | any[]
	step?: number | string
	format?: any
	mode?: string
	range: Range
	pips?: Pips
	rtl?: boolean
	orientation?: Orientations
	tooltips?: boolean
	connect?: 'lower' | 'upper' | boolean | boolean[]
}
