<script setup lang="ts">
import { ref } from 'vue';

const rightLabel = ref(false);
const leftLabel = ref(false);
</script>
<template>
  <div>
    <r-checkbox v-model="rightLabel" label="right label" />
  </div>
  <div>
    <r-checkbox v-model="leftLabel" label="left label" left-label />
  </div>
</template>
<style lang="scss" scoped></style>
