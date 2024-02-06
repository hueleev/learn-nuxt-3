<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!');
}
</script>
