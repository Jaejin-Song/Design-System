<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  file: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="demo-box">
    <div class="title">title</div>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.title {
  margin-bottom: 30px;
}

.demo-box {
  background: #ffffff;
  padding: 12px;
  margin-bottom: 12px;
  color: black;
}
</style>
