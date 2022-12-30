import type { ElProps } from '../Base'

export interface AppLoadingBarProps extends Partial<ElProps> {
	color?: Colors
	duration?: number
	fixedPosition?: boolean
	indeterminate?: boolean
	show?: boolean
}
