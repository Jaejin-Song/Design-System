<script setup lang="ts"></script>
<template>
  <div class="demo-page">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.demo-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
