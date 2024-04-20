<script setup lang="ts">
import { ref } from 'vue';

const textVal = ref('');
const numberVal = ref<number>();
const password = ref('');
const isPassword = ref(true);

const onUpdate = (val: any) => {
  console.log('val :>> ', val, typeof val);
};
</script>
<template>
  <n-input v-model="textVal" @update:model-value="onUpdate" label="type text" />
  <n-input
    v-model.number="numberVal"
    @update:model-value="onUpdate"
    type="number"
    label="type number" />
  <n-input
    v-model="password"
    @update:model-value="onUpdate"
    :type="isPassword ? 'password' : 'text'">
    <template #suffix>
      <span @click="isPassword = !isPassword" role="presentation">icon</span>
    </template>
  </n-input>
  <n-input v-model="password" @update:model-value="onUpdate" :type="'search'">
    <template #suffix>
      <span role="presentation">icon</span>
    </template>
  </n-input>
</template>
<style lang="scss" scoped></style>
