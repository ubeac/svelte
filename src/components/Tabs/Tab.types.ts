import type { ElProps } from '$lib/components'

export interface TabsProps extends Partial<ElProps> {
	vertical?: boolean
}

export interface TabItemProps extends Partial<ElProps> {
	active?: boolean
	disabled?: boolean
}

export interface TabListProps extends Partial<ElProps> {
	pills?: boolean
	grow?: boolean
	card?: boolean
}
export interface TabContentProps extends Partial<ElProps> {}

export interface TabPaneProps extends Partial<ElProps> {}

export type TabsContext = {
	register: (id: string, active: boolean) => void
	registerPane: (id: string) => string
	unregister: (id: string) => void
}
