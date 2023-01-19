import type { ElProps } from '$lib'

export interface ToastProps extends Partial<ElProps> {
	show?: boolean
}

export interface ToastBodyProps extends Partial<ElProps> {
	//
}

export interface ToastContainerProps extends Partial<ElProps> {
	//
}

export interface ToastHeaderProps extends Partial<ElProps> {
	showCloseButton?: boolean
}
