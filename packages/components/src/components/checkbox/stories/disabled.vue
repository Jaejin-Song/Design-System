<script setup lang="ts">
import { ref } from 'vue';

import Checkbox from '../checkbox.vue';

const isChecked = ref(true);
const notChecked = ref(false);
</script>
<template>
  <div>
    <checkbox v-model="isChecked" disabled label="checked" />
    <checkbox v-model="notChecked" disabled label="not checked" />
  </div>
</template>
<style lang="scss" scoped></style>
