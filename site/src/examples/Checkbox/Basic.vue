<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>
<template>
  <r-checkbox v-model="checked" />
</template>
<style lang="scss" scoped></style>
