<template>
  <q-page padding>
    <h2>Course - example</h2>
    <div class="text-subtitle1">
      {{ id }}
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const id: Ref<string | number> = ref('');
id.value = String(route.params.id);
</script>

<style lang="scss" scoped></style>
