<template>
  <div class="game-time">
    <p class="game-time-text-prefix">あと</p>
    <p class="game-time-text">{{ gameTimeValue }}</p>
    <p class="game-time-text-suffix">びょう</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  gameTimeValue: number
}>()
</script>

<style scoped>
.game-time {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.game-time-text,
.game-time-text-prefix,
.game-time-text-suffix {
  margin: 0;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
  color: #000;
}
.game-time-text {
  font-size: 24px;
  margin: 0 4px;
}
</style>