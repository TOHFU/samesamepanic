<template>
  <div class="menu">
    <img class="menu_about" src="@/assets/images/menu.png" width="427" height="704">
    <NuxtLink to="/game">
      <img class="menu_startButton" src="@/assets/images/button-start.png" width="162" height="73" alt="スタート">
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  // Import necessary components and libraries
</script>

<style scoped>
  .menu {
    max-width: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    background-color: #A4D8E5;
    overflow: hidden;
  }
  .menu_about {
    width: auto;
    height: calc(100vh - 176px);
    scale: 1.05;
    padding-top: 44px;
    padding-bottom: 132px;
    transform-origin: center bottom;
    animation: menu-about-enter 1s cubic-bezier(0.34, 1.4, 0.64, 1) forwards;
  }
  .menu_startButton {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 30px;
  }
  .menu_startButton:active {
    transform: translate(4px, 4px);
  }

  @keyframes menu-about-enter {
    0% {
      opacity: 0;
      transform: translateY(-70vh) scaleY(1.2);
    }

    50% {
      opacity: 1;
      transform: translateY(0) scaleY(0.7);
    }

    65% {
      transform: translateY(-16px) scaleY(1.15);
    }

    80% {
      transform: translateY(0) scaleY(0.88);
    }

    92% {
      transform: translateY(-4px) scaleY(1.05);
    }

    100% {
      transform: translateY(0) scaleY(1);
    }
  }
</style>