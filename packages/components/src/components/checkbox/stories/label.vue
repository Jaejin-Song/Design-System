<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '../checkbox.vue';

const rightLabel = ref(false);
const leftLabel = ref(false);
</script>
<template>
  <div>
    <checkbox v-model="rightLabel" label="right label" />
  </div>
  <div>
    <checkbox v-model="leftLabel" label="left label" left-label />
  </div>
</template>
<style lang="scss" scoped></style>
