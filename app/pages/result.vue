<template>
  <div class="result">
    <img class="result_title" src="@/assets/images/thankyou.png" width="353" height="116" alt="たすけてくれてありがとう！" />
    <div class="result_sharks">
      <div class="result_shark">
        <img src="@/assets/images/shark/cat_06.png" width="100" height="100" />
        <p class="result_shark_score">{{ catScore }}ひき</p>
      </div>
      <div class="result_shark">
        <img src="@/assets/images/shark/shark_06.png" width="100" height="100" />
        <p class="result_shark_score">{{ sharkScore }}ひき</p>
      </div>
      <div class="result_shark">
        <img src="@/assets/images/shark/hammerhead_06.png" width="100" height="100" />
        <p class="result_shark_score">{{ hammerheadScore }}ひき</p>
      </div>
    </div>
    <NuxtLink to="/">
      <img class="result_backButton" src="@/assets/images/button-back.png" width="162" height="73" alt="もどる" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { catScore, sharkScore, hammerheadScore } = useScore()
</script>

<!-- styles scoped -->
<style scoped>
.result {
  width: 100%;
  max-width: 100vh;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #A4D8E5;
}
.result_title {
  max-width: 353px;
  width: 100%;
  height: auto;
}
.result_sharks {
  display: flex;
}
.result_shark {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.result_shark_score {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  position: relative;
  top: -24px;
}
.result_backButton:active {
  transform: translate(4px, 4px);
}
</style>
