<template>
  <div class="guide-container">引导页</div>
</template>

<script lang="ts">
import { SHOOTS_GUIDE_PREFIX_NAME } from '@/data/router/index.name';

export default {
  name: SHOOTS_GUIDE_PREFIX_NAME,
};
</script>

<script lang="ts" setup>
// console.log('引导页');
</script>

<style scoped>
.guide-container {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>