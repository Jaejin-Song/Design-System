<script setup lang="ts">
import { ref } from 'vue';

const arrayModel = ref<string[]>([]);
</script>
<template>
  <div>
    <r-checkbox v-model="arrayModel" value="john" label="John" />
    <r-checkbox v-model="arrayModel" value="jack" label="Jack" />
    <r-checkbox v-model="arrayModel" value="mike" label="Mike" />
  </div>
  <div>{{ `The Model Data : ${arrayModel}` }}</div>
</template>
<style lang="scss" scoped></style>
