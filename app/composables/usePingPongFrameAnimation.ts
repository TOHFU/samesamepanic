import { onUnmounted, ref, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { FRAME_COUNT } from '~/types/animal'

type Options = {
  frameCount?: number
  speed: MaybeRefOrGetter<number>
  isActive: MaybeRefOrGetter<boolean>
}

export function usePingPongFrameAnimation({
  frameCount = FRAME_COUNT,
  speed,
  isActive,
}: Options) {
  const currentFrame = ref(1)
  const direction = ref(1)
  let timer: ReturnType<typeof setInterval> | null = null

  const stop = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const start = () => {
    stop()

    if (!import.meta.client) {
      return
    }

    timer = setInterval(() => {
      const nextFrame = currentFrame.value + direction.value

      if (nextFrame >= frameCount) {
        direction.value = -1
      } else if (nextFrame <= 1) {
        direction.value = 1
      }

      currentFrame.value = nextFrame
    }, toValue(speed))
  }

  watch(
    () => toValue(isActive),
    (active) => {
      if (active) {
        start()
      } else {
        stop()
      }
    },
    { immediate: true }
  )

  watch(
    () => toValue(speed),
    () => {
      if (toValue(isActive)) {
        start()
      }
    }
  )

  onUnmounted(stop)

  return { currentFrame }
}
