<script setup lang="ts">
import { ref } from 'vue';
import { QCheckbox } from './components/checkbox';

const checked1 = ref(false);
</script>

<template>
  <main>
    <QCheckbox v-model="checked1" :true-value="'checked'" />
    {{ checked1 }}
  </main>
</template>

<style lang="scss" scoped></style>
