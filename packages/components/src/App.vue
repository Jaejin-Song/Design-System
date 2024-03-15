<script setup lang="ts">
import { ref } from 'vue';
import { RCheckbox } from './components/checkbox';

const checked = ref(false);
</script>

<template>
  <main>
    {{ checked }}

    <!-- Basic -->
    <RCheckbox v-model="checked" />

    <!-- Label -->
    <div>
      <RCheckbox v-model="checked" label="label for checkbox" />
    </div>
    <div>
      <RCheckbox v-model="checked" label="label for checkbox" left-label />
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
