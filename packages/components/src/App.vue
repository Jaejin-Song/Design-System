<script setup lang="ts">
import { ref } from 'vue';
import { QCheckbox, RCheckbox } from './components/checkbox';

const checked1 = ref(false);
const checked2 = ref(false);
</script>

<template>
  <main>
    <QCheckbox v-model="checked1" />
    {{ checked1 }}

    <RCheckbox v-model="checked2" />
    {{ checked2 }}
  </main>
</template>

<style lang="scss" scoped></style>
