<template>
  <!-- <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">All Courses</div>
      <p class="q-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요.</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, thumbnail, title, subtitle, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <NuxtLink v-slot="{ navigate }" custom :to="path">
          <CourseCard
            :thumbnail="thumbnail"
            :title="title"
            :subtitle="subtitle"
            @click="navigate"
          />
        </NuxtLink>
      </div>
    </div>
  </q-page> -->
  <div>
    <AppCard class="text-center">
      <div class="q-py-xl">
        <div class="text-h4">Vue3 Master 로드맵</div>
        <div class="text-subtitle1 text-grey-8 q-mt-sm">
          웹개발 입문부터, Vue 프론트엔드 실전 그리고 실무 활용법까지 함께
          시작해봐요!
        </div>
        <q-btn
          label="시작하기"
          class="q-mt-lg"
          size="lg"
          color="primary"
          unelevated
          to="/course/html-css"
        />
      </div>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
// const { courses } = useCourses();
</script>
