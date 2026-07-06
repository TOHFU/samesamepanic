import { onUnmounted, ref } from 'vue'

type Options = {
  count: number
  isActive?: MaybeRefOrGetter<boolean>
}

export function useCountDownTimer({ count, isActive }: Options) {
  const countValue = ref(count)
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
      countValue.value--
      if (countValue.value <= -1 && timer) {
        clearInterval(timer)
        timer = null
      }
    }, 1000)
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

  onUnmounted(stop)

  return { countValue }
}
