<template>
  <!-- 顶部 tab 栏 -->
  <div class="tab-layout-container">
    <div> 顶部 tab 栏 </div>

    <div>
      <div>侧边栏</div>
      <router-view v-slot="{ Component }">
        <transition name="page">
          <keep-alive :include="[]">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
// import { SHOOTS_GUIDE_PREFIX_NAME } from '@/data/router/index.name';

export default {
  name: 'TabLayout',
};
</script>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

console.log('TabLayout', router);
</script>


<style scoped></style>