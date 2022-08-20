export const TAB_SHAPES = ['default', 'pills'] as const
export type TabShapes = typeof TAB_SHAPES[number]

export type TabType = {
	id: string
	name: string
	disabled: boolean
	active: boolean
	icon: string
}
