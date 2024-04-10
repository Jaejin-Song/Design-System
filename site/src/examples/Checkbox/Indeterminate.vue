<script setup lang="ts">
import { ref } from 'vue';

const indet = ref(null);
</script>
<template>
  <div>
    <n-checkbox v-model="indet" label="checkbox" />
  </div>
  <div>{{ `The Model Data : ${indet}` }}</div>
</template>
<style lang="scss" scoped></style>
