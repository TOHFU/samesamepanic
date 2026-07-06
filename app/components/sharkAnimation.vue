<template>
  <div
    class="animal-animation"
    :class="`frame-${currentFrame}`"
  >
    <img
      v-for="frame in FRAME_COUNT"
      :key="frame"
      class="animal-animation__frame"
      :class="`frame-${frame}`"
      :src="getAnimalImageUrl(animal, frame)"
      width="200"
      height="200"
      alt=""
    >
  </div>
</template>

<script setup lang="ts">
import type { Animal } from '~/types/animal'
import { FRAME_COUNT } from '~/types/animal'
import { getAnimalImageUrl } from '~/utils/animalImages'

const props = defineProps<{
  animal: Animal
  speed: number
  isActive: boolean
}>()

const emit = defineEmits<{
  finish: []
}>()

const { currentFrame } = usePingPongFrameAnimation({
  speed: () => props.speed,
  isActive: () => props.isActive,
})

watch(currentFrame, (newVal) => {
  if (newVal === 1) {
    emit('finish')
  }
})
</script>

<style scoped>
.animal-animation {
  width: 200px;
  height: 200px;
  position: relative;
}

.animal-animation__frame {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  will-change: opacity;
}

.animal-animation.frame-1 .animal-animation__frame.frame-1,
.animal-animation.frame-2 .animal-animation__frame.frame-2,
.animal-animation.frame-3 .animal-animation__frame.frame-3,
.animal-animation.frame-4 .animal-animation__frame.frame-4,
.animal-animation.frame-5 .animal-animation__frame.frame-5,
.animal-animation.frame-6 .animal-animation__frame.frame-6 {
  opacity: 1;
}
</style>
