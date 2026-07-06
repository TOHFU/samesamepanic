<template>
  <div class="game"> 
    <Shark
      v-for="shark in sharkList"
      :key="shark.id"
      :id="shark.id"
      :animal="shark.animal"
      :speed="shark.speed"
      :x-position="shark.xPosition"
      :y-position="shark.yPosition"
      :revalidate="() => revalidateSharkList(shark.id)"
    />
    <div class="countdown-overlay">
      <CountDown :count="countValue" />
    </div>
    <div class="game-time-overlay">
      <GameTime
        v-if="isGameActive"
        :gameTimeValue="gameTimeValue"
      />
    </div>
    <div
      v-if="isGameEnd"
      class="game-end-overlay"
    >
      <GameEnd />
    </div>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from "uuid";
import CountDown from '~/components/countDown.vue';
import Shark from '~/components/shark.vue';
import { useCountDownTimer } from '~/composables/useCountDownTimer';
import type { Animal } from '~/types/animal';
import { ANIMALS } from '~/types/animal';

type SharkItem = {
  id: string
  animal: Animal
  speed: number
  xPosition: number
  yPosition: number
}

const GAME_TIME = 30

const router = useRouter()
const isGameActive = ref(false)
const sharkList = ref<SharkItem[]>([])
const { countValue } = useCountDownTimer({ count: 3, isActive: true })
const { countValue: gameTimeValue } = useCountDownTimer({ count: GAME_TIME, isActive: isGameActive })

const revalidateSharkList = (id: string) => {
  sharkList.value = sharkList.value.map(sharkItem =>
    sharkItem.id !== id ? sharkItem : createShark()
  ).sort((a, b) => a.yPosition - b.yPosition)
}

const createShark = (): SharkItem => {
  const id = uuid()
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)]!
  const speed = Math.floor(Math.random() * 300) + 100
  const xPosition = Math.random() * 2 - 1
  const yPosition = Math.random() * 2 - 1
  return {
    id,
    animal,
    speed,
    xPosition,
    yPosition,
  }
}

const isGameEnd = computed(() => {
  return !isGameActive.value && gameTimeValue.value <= 0
})

watch(countValue, (count) => {
  if (count <= 0) {
    isGameActive.value = true
    sharkList.value = Array.from({ length: 4 }, createShark)
  }
})

watch(gameTimeValue, (count) => {
  if (count <= 0) {
    isGameActive.value = false
    sharkList.value = []
    setTimeout(() => {
      router.push('/result')
    }, 3000)
  }
})
</script>

<style scoped>
  .game {
    max-width: 100vh;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    background-color: #A4D8E5;
    overflow: hidden;
  }
  .countdown-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  .game-time-overlay {
    position: absolute;
    top: 24px;
    right: 24px;
    margin: auto;
  }

</style>