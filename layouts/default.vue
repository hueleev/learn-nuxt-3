<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat label="Home" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat label="About" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn stretch flat label="Youtube" no-caps @click="moveYoutube" />
        <!-- <q-btn stretch flat label="Home" to="/" />
        <q-separator dark vertical />
        <q-btn stretch flat label="About" to="/about" /> -->
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat label="Admin" no-caps @click="navigate()" />
        </NuxtLink>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// Vue3에서 쓰이는 refs, computed, watch는 Auto-imports가 적용되어 아래 코드만 적어도 동작을 한다.
// 하지만 회사에 따라 혹은 사람에 따라 Import가 됐다는 걸 보여주는 쪽을 더 선호할 수도 있다 그럴 경우에는 아래 두 가지 방법을 사용할 수 있다.
// 1. 명시적 import
// import { ref, computed } from '#imports'
// 2. config 파일 수정 (nuxt.config.ts)
// export default defineNuxtConfig({
//   imports: {
//     autoImport: false
//   }
// })
const pageContainerStyle = computed(() => ({
  maxWidht: '1080px',
  margin: '0 auto',
}));

const moveYoutube = async () => {
  await navigateTo('https://youtube.com/@gymcoding', {
    external: true,
    open: { target: '_blank' },
  });
};
</script>
