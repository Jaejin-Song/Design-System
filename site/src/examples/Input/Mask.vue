<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>
<template>
  <n-input v-model="value" mask="###-###"></n-input>
  <div>
    {{ `value: ${value}` }}
  </div>
</template>
<style lang="scss" scoped></style>
