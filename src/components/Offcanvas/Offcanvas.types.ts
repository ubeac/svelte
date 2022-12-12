import type { ElProps } from '$lib/components'

declare type Placements = 'top' | 'end' | 'bottom' | 'start' | undefined

export interface OffcanvasProps extends Partial<ElProps> {
	placement?: Placements
	scroll?: boolean
	backdrop?: boolean
	keyboard?: boolean
	show?: boolean
}