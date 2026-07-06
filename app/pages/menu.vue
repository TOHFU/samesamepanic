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
    height: calc(100vh - 130px);
    scale: 1.05;
    padding-bottom: 132px;
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
</style>