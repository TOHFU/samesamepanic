<template>
  <div class="opening">
      <img class="opening_logo" src="@/assets/images/logo.png" width="360" height="360" alt="サメサメパニック">
      <NuxtLink to="/menu">
        <img class="opening_startButton" src="@/assets/images/button-start.png" width="162" height="73" alt="スタート">
      </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { resetScores } = useScore()

onMounted(() => {
  resetScores()
})
</script>

<!-- styles scoped -->
<style scoped>
  .opening {
    width: 100%;
    max-width: 100vh;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
  }

  .opening_logo {
    opacity: 0;
    animation: opening-logo-enter 1.4s linear forwards;
  }

  .opening_startButton {
    opacity: 0;
    animation: opening-button-enter 0.6s ease-out 1.4s forwards;
  }

  .opening_startButton:active {
    transform: translate(4px, 4px);
  }

  @keyframes opening-logo-enter {
    0% {
      opacity: 0;
      transform: translateY(-55vh);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes opening-button-enter {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
