<script lang="ts">
import { SHOOTS_PREFIX_NAME } from '@/data/router/index.name';

export default {
  name: SHOOTS_PREFIX_NAME,
};
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// 全局变量
const $route = useRoute();
/** 动态组件 */
const comps: Record<string, Record<string, object>> = import.meta.glob('./layout/*.vue', { eager: true });

// 变量
const keepAliveArray: Array<string> = []; // 需要 KeepAlive 的数组

/** 动态组件 */
const dynamicComponents = computed(() => {
  const layout = $route?.meta?.layout || 'TabLayout';
  const keys = Object.keys(comps);
  const index = keys.findIndex(key => key.includes(layout as string));

  return comps[keys[index]].default;
});
</script>

<template>
  <keep-alive :include="keepAliveArray">
    <component :is="dynamicComponents"/>
  </keep-alive>
</template>
