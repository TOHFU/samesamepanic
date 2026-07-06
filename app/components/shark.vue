<template>
  <div
    class="shark"
    :style="positionStyle"
    @click="handleClick"
  >
    <SharkAnimation
      :animal="animal"
      :speed="speed"
      :is-active="!isHit"
      @finish="notifyRevalidate"
    />
    <img
      class="effect"
      :class="{ 'is-show': isHit }"
      src="@/assets/images/effect.png"
      alt=""
      width="80"
      height="80"
    >
  </div>
</template>

<script setup lang="ts">
import type { Animal } from '~/types/animal';

const HIT_EFFECT_DURATION_MS = 1000

const props = withDefaults(defineProps<{
  id: string
  animal: Animal
  speed: number
  xPosition: number
  yPosition: number
  revalidate?: (id: string) => void
}>(), {
  animal: 'cat',
  speed: 200,
  xPosition: 0,
  yPosition: 0,
})

const { incrementCatScore, incrementSharkScore, incrementHammerheadScore } = useScore()

const positionStyle = computed(() => ({
  left: `${(props.xPosition + 1) / 2 * 100}%`,
  top: `${(props.yPosition + 1) / 2 * 100}%`,
}))

const isHit = ref(false)

const notifyRevalidate = () => {
  props.revalidate?.(props.id)
}

const handleClick = () => {
  if (isHit.value) {
    return
  }

  isHit.value = true
}

watch(isHit, (hit, _, onCleanup) => {
  if (!hit) {
    return
  }

  switch (props.animal) {
    case 'cat':
      incrementCatScore()
      break
    case 'shark':
      incrementSharkScore()
      break
    case 'hammerhead':
      incrementHammerheadScore()
      break
    default:
      break;
  }
  const timer = setTimeout(notifyRevalidate, HIT_EFFECT_DURATION_MS)
  onCleanup(() => clearTimeout(timer));
});
</script>
<style scoped>
.shark {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.effect {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  opacity: 0;
  pointer-events: none;
}

.effect.is-show {
  opacity: 1;
}
</style>
