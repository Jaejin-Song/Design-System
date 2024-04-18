<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '../checkbox.vue';

const checked = ref(true);
</script>
<template>
  <checkbox v-model="checked" />
</template>
<style lang="scss" scoped></style>
