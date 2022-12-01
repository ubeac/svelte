import type { ElProps } from '$lib/components'

export const AVATAR_SIZES = ['xs', 'sm', 'ep', 'md', 'lg', 'xl'] as const
export type AvatarSizes = typeof AVATAR_SIZES[number]

export interface AvatarProps extends Partial<ElProps> {
	/**
	 * Set color for Avatar
	 */
	color?: Colors

	/**
	 * Set image for Avatar
	 */
	image?: string | undefined

	/**
	 * Set Avatar shape to: 'pill'
	 */
	pill?: boolean

	/**
	 * Set Avatar shape to: 'rounded corners'
	 */
	rounded?: boolean

	/**
	 * Set Avatar shape to: 'tile'
	 */
	tile?: boolean

	/**
	 * Set size for Avatar: 'xs', 'sm', 'ep', 'md', 'lg', 'xl'
	 */
	size?: AvatarSizes
}
