<template>
  <div class="game-score">
    <img class="game-score-icon" src="@/assets/images/shark/cat_06.png" width="100" height="100" />
    <p class="game-score-value">{{ catScore }}ひき</p>
    <img class="game-score-icon game-score-icon-shark" src="@/assets/images/shark/shark_06.png" width="100" height="100" />
    <p class="game-score-value">{{ sharkScore }}ひき</p>
    <img class="game-score-icon" src="@/assets/images/shark/hammerhead_06.png" width="100" height="100" />
    <p class="game-score-value">{{ hammerheadScore }}ひき</p>
  </div>
</template>

<script setup lang="ts">
import { useScore } from '~/composables/useScore';

const { catScore, sharkScore, hammerheadScore } = useScore();
</script>

<style scoped>
.game-score {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.game-score-icon {
  width: 40px;
  height: 40px;
}
.game-score-value {
  position: relative;
  left: -10px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  margin-left: 10px;
}
.game-score-icon-shark {
  position: relative;
  top: 4px;
}
</style>