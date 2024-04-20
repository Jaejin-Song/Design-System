<script setup lang="ts">
import { ref } from 'vue';
import search from '../../../assets/search.svg';
import passwordSvg from '../../../assets/password.svg';

const textVal = ref('');
const numberVal = ref<number>();
const password = ref('');
const isPassword = ref(true);

const onUpdate = (val: any) => {
  console.log('val :>> ', val, typeof val);
};

const test = () => {
  console.log('import.meta.url :>> ', import.meta.url);
};

test();
</script>
<template>
  <n-input v-model="textVal" @update:model-value="onUpdate" label="type text" />
  <n-input
    v-model.number="numberVal"
    @update:model-value="onUpdate"
    type="number"
    label="type number"
    hint="type: number" />
  <n-input
    v-model="password"
    @update:model-value="onUpdate"
    :type="isPassword ? 'password' : 'text'"
    hint="type: password">
    <template #append>
      <span @click="isPassword = !isPassword" role="presentation">
        <img
          :src="passwordSvg"
          alt="search icon"
          style="width: 12px; height: 12px" />
      </span>
    </template>
  </n-input>
  <n-input
    v-model="password"
    @update:model-value="onUpdate"
    :type="'search'"
    prefix=""
    hint="type: search">
    <template #append>
      <span role="presentation">
        <img
          :src="search"
          alt="search icon"
          style="width: 12px; height: 12px" />
      </span>
    </template>
    <template #prefix> search : </template>
    <template #suffix> -suffix </template>
  </n-input>
</template>
<style lang="scss" scoped></style>
