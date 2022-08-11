<script setup lang="ts">
// const HelloWorld = defineAsyncComponent(() => import('@/components/HelloWorld.vue'));

// 需要 KeepAlive 的数组
const keepAliveArray: Array<string> = [];
</script>

<template>
  <div>111</div>
  <keep-alive :include="keepAliveArray">
    <router-view ></router-view>
  </keep-alive>
</template>
