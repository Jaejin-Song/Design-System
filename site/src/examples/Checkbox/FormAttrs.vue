<script setup lang="ts">
import { ref } from 'vue';

const isChecked = ref(true);
</script>
<template>
  <div>
    <r-checkbox v-model="isChecked" label="checkbox" name="checkbox" />
  </div>
</template>
<style lang="scss" scoped></style>
