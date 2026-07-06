export const ANIMALS = ['shark', 'cat', 'hammerhead'] as const

export type Animal = (typeof ANIMALS)[number]

export const FRAME_COUNT = 6
