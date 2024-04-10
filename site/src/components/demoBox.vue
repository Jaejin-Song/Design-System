<script setup lang="ts">
import { computed, ref } from 'vue';

export interface Props {
  file: string;
}
</script>
<template>
  <div class="demo-box">
    <div>title</div>
    <component :is="component"></component>
  </div>
</template>
<style lang="scss" scoped>
.demo-box {
  padding: 12px;
  margin-bottom: 12px;
}
</style>
