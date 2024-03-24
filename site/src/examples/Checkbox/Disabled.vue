<script setup lang="ts">
import { ref } from 'vue';

const isChecked = ref(true);
const notChecked = ref(false);
</script>
<template>
  <div>
    <r-checkbox v-model="isChecked" disabled label="checked" />
    <r-checkbox v-model="notChecked" disabled label="not checked" />
  </div>
</template>
<style lang="scss" scoped></style>
