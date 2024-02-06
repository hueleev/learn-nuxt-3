<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
// 컴포넌트는 components/ 디렉토리에 생성할 수 있으며 명시적으로 가져올 필요 없이 애플리케이션 전체에서 자동으로 사용할 수 있습니다.
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}

withDefaults(defineProps<Props>(), {
  thumbnail: '',
  title: '',
  subtitle: '',
});

defineEmits<{
  click: [];
}>();
</script>
