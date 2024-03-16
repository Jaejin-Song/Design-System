<script setup lang="ts">
import { ref, computed } from 'vue';
import { RCheckbox } from './components/checkbox';

const checked = ref(false);
const indet = ref();
const arrayModel = ref<any[]>([]);

const options = ['john', 'jack', 'mike'];
const checkedList = ref<any[]>(['john']);

const checkState = computed(() =>
  checkedList.value.length === options.length
    ? true
    : checkedList.value.length
      ? null
      : false,
);

const onUpdateCheckState = (_value: any) => {
  const val = _value as boolean | null;

  if (val === true) {
    checkedList.value = [...options];
  } else {
    checkedList.value = [];
  }
};

const customModel = ref<'yes' | 'no'>('no');
</script>

<template>
  <main>
    {{ checked }}

    <!-- Basic -->
    <r-checkbox v-model="checked" />
    <br />

    <!-- Label -->
    <div>
      <r-checkbox v-model="checked" label="label for checkbox" />
    </div>
    <div>
      <r-checkbox v-model="checked" label="label for checkbox" left-label />
    </div>
    <br />

    <!-- Indeterminate -->
    <div>
      <r-checkbox v-model="indet" label="checkbox" />
    </div>
    <div>{{ `The Model Data : ${indet}` }}</div>
    <br />

    <!-- Array Model -->
    <div>
      <r-checkbox v-model="arrayModel" value="john" label="John" />
      <r-checkbox v-model="arrayModel" value="jack" label="Jack" />
      <r-checkbox v-model="arrayModel" value="mike" label="Mike" />
    </div>
    <div>{{ `The Model Data : ${arrayModel}` }}</div>
    <br />

    <!-- Check All -->
    <div>
      <r-checkbox
        :model-value="checkState"
        @update:model-value="onUpdateCheckState"
        label="check state" />
    </div>
    <div>
      <r-checkbox
        v-for="opt of options"
        :key="opt"
        v-model="checkedList"
        :value="opt"
        :label="opt" />
    </div>
    <br />

    <!-- Custom model values -->
    <r-checkbox
      v-model="customModel"
      true-value="yes"
      false-value="no"
      label="yes for true, no for false" />
    <div>{{ `Custom model value : ${customModel}` }}</div>
  </main>
</template>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
