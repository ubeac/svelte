export const CARD_MEDIA_PLACEMENTS = ['top', 'start', 'middle', 'end', 'bottom'] as const
export type CardMediaPlacements = typeof CARD_MEDIA_PLACEMENTS[number]

export const CARD_STAMP_PLACEMENTS = ['top-start', 'top-end', 'bottom-start', 'bottom-end'] as const
export type CardStampPlacements = typeof CARD_STAMP_PLACEMENTS[number]

export const CARD_STAMP_SIZES = ['sm', 'md', 'lg'] as const
export type CardStampSizes = typeof CARD_STAMP_SIZES[number]

export const CARD_STATUS_PLACEMENTS = ['top', 'bottom', 'start', undefined] as const
export type CardStatusPlacements = typeof CARD_STATUS_PLACEMENTS[number]

export const CARD_STATUS_SIZES = ['sm', 'md', 'lg'] as const
export type CardStatusSizes = typeof CARD_STATUS_SIZES[number]
