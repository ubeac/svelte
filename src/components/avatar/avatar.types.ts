import type { Colors } from '$lib/types'

import type { SharedProps } from '../base/El.type'

export const AVATAR_SHAPES = ['circle', 'round', 'tile'] as const
export type AvatarShapes = typeof AVATAR_SHAPES[number]

export const AVATAR_SIZES = ['xs', 'sm', 'ep', 'md', 'lg', 'xl'] as const
export type AvatarSizes = typeof AVATAR_SIZES[number]

export type AvatarProps = SharedProps<{
	/**
	 * Set color for Avatar
	 */
	color?: Colors

	/**
	 * Set image for Avatar
	 */
	image?: string | undefined

	/**
	 * Set shape for Avatar: 'circle', 'round', 'tile'
	 */
	shape?: AvatarShapes

	/**
	 * Set size for Avatar: 'xs', 'sm', 'ep', 'md', 'lg', 'xl'
	 */
	size?: AvatarSizes
}>;