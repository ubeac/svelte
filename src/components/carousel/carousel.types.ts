import type { Writable } from 'svelte/store'

export const CAROUSEL_BUTTON_DIRECTIONS = ['prev', 'next'] as const
export type CarouselButtonDirections = typeof CAROUSEL_BUTTON_DIRECTIONS[number]

export const CAROUSEL_TRANSITIONS = ['slide', 'fade', 'none'] as const
export type CarouselTransitions = typeof CAROUSEL_TRANSITIONS[number]

export type CarouselContext = {
	register: (id: string) => void
	unregister: (id: string) => void
	activeItem: Writable<string>
	next: () => void
	prev: () => void
	to: (id: string) => void
}
