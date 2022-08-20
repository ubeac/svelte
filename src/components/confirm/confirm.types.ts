export const CONFIRM_TYPES = ['error', 'info', 'question', 'success', 'warning', undefined] as const
export type ConfirmTypes = typeof CONFIRM_TYPES[number]