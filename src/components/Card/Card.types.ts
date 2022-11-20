export const CARD_MEDIA_PLACEMENTS = ['top', 'start', 'middle', 'end', 'bottom'] as const
export type CardMediaPlacements = typeof CARD_MEDIA_PLACEMENTS[number]

export const CARD_STAMP_POSITIONS = ['top-start', 'top-end', 'bottom-start', 'bottom-end'] as const
export type CardStampPositions = typeof CARD_STAMP_POSITIONS[number]

export const CARD_STAMP_SIZES = ['sm', 'md', 'lg'] as const
export type CardStampSizes = typeof CARD_STAMP_SIZES[number]

export const CARD_STATUS_POSITIONS = [undefined, 'top', 'bottom', 'start'] as const
export type CardStatusPositions = typeof CARD_STATUS_POSITIONS[number]

export const CARD_STATUS_SIZES = ['sm', 'md', 'lg'] as const
export type CardStatusSizes = typeof CARD_STATUS_SIZES[number]
