<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from '..';

const arrayModel = ref<string[]>([]);
</script>
<template>
  <div>
    <checkbox v-model="arrayModel" value="john" label="John" />
    <checkbox v-model="arrayModel" value="jack" label="Jack" />
    <checkbox v-model="arrayModel" value="mike" label="Mike" />
  </div>
  <div>{{ `The Model Data : ${arrayModel}` }}</div>
</template>
<style lang="scss" scoped></style>
