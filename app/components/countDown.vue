<template>
  <div class="countdown" :class="'count-' + count">
    <img class="count count-3" src="@/assets/images/countdown_03.png" alt="3" width="89" height="112" />
    <img class="count count-2" src="@/assets/images/countdown_02.png" alt="2" width="89" height="112" />
    <img class="count count-1" src="@/assets/images/countdown_01.png" alt="1" width="89" height="112" />
    <img class="start count-0" src="@/assets/images/countdown_00.png" alt="スタート" width="340" height="175" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  count: number
}>()
</script>

<style scoped>
.countdown {
  position: relative;
  width: 340px;
  height: 175px;
  pointer-events: none;
}
.count, .start  {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
}
.count-3 .count-3,
.count-2 .count-2,
.count-1 .count-1,
.count-0 .count-0 {
  opacity: 1;
}
</style>