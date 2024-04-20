<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const value2 = ref('');
</script>
<template>
  <div>
    <n-input v-model="value" mask="###-###"></n-input>
    <div>
      {{ `value: ${value}` }}
    </div>
  </div>
  <div>
    <n-input v-model="value2" mask="###-###" fill-mask></n-input>
    <div>
      {{ `value: ${value}` }}
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
