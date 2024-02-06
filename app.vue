<template>
  <!-- <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title> Vue & Nuxt Mastery Class </q-toolbar-title>
        <q-btn stretch flat label="Home" to="/" />
        <q-separator dark vertical />
        <q-btn stretch flat label="About" to="/about" />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <NuxtPage />
    </q-page-container>
  </q-layout> -->
  <!-- <NuxtPage> - <NuxtPage> 기본적으로 라우트 path가 변경 되었을 때 다시 렌더링됨. -->
  <!-- <NuxtPage>로 변경 후 [이전 강의], [다음 강의]를 클릭하면 다시 렌더링 되는걸 확인할 수 있다. -->
  <NuxtLayout>
    <!-- 동적키 할당 :page-key="(route) => route.fullPath" -->
    <!-- 레이아웃 할당 :name="layoutName"-->
    <NuxtPage />
  </NuxtLayout>
  <!--<RouterView> - <RouterView> 컴포넌트가 마운트 될 때 한번만 렌더링됨.-->
  <!--<RouterView>로 변경 후 [이전 강의], [다음 강의]를 클릭하면 다시 렌더링이 안되는걸 확인할 수 있다.-->
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
// API 호출이나 로그인 상태에 따라 선택할 수 있습니다.
// <NuxtLayout>에 name props를 적용하게 되면 하위 페이지 컴포넌트에서 사용한 setPageLayout 함수가 동작하지 않습니다.
// import type { LayoutKey } from '#build/types/layouts';

// const layoutName = ref<LayoutKey>('default');
</script>
