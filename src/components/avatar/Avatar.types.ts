export const AVATAR_SHAPES = ['circle', 'round', 'tile'] as const
export type AvatarShapes = typeof AVATAR_SHAPES[number]

export const AVATAR_SIZES = ['xs', 'sm', 'ep', 'md', 'lg', 'xl'] as const
export type AvatarSizes = typeof AVATAR_SIZES[number]
