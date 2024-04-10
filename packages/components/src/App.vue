<script setup lang="ts">
import { ref, computed } from 'vue';

const checked = ref(true);
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

const isChecked = ref(true);
const notChecked = ref(false);
</script>

<template>
  <main>
    {{ checked }}

    <!-- Basic -->
    <n-checkbox v-model="checked" />
    <br />

    <!-- Label -->
    <div>
      <n-checkbox v-model="checked" label="label for checkbox" />
    </div>
    <div>
      <n-checkbox v-model="checked" label="label for checkbox" left-label />
    </div>
    <br />

    <!-- Indeterminate -->
    <div>
      <n-checkbox v-model="indet" label="checkbox" />
    </div>
    <div>{{ `The Model Data : ${indet}` }}</div>
    <br />

    <!-- Array Model -->
    <div>
      <n-checkbox v-model="arrayModel" value="john" label="John" />
      <n-checkbox v-model="arrayModel" value="jack" label="Jack" />
      <n-checkbox v-model="arrayModel" value="mike" label="Mike" />
    </div>
    <div>{{ `The Model Data : ${arrayModel}` }}</div>
    <br />

    <!-- Check All -->
    <div>
      <n-checkbox
        :model-value="checkState"
        @update:model-value="onUpdateCheckState"
        label="check state" />
    </div>
    <div>
      <n-checkbox
        v-for="opt of options"
        :key="opt"
        v-model="checkedList"
        :value="opt"
        :label="opt" />
    </div>
    <br />

    <!-- Custom model values -->
    <n-checkbox
      v-model="customModel"
      true-value="yes"
      false-value="no"
      label="yes for true, no for false" />
    <div>{{ `Custom model value : ${customModel}` }}</div>
    <br />

    <!-- Disabled -->
    <div>
      <n-checkbox v-model="isChecked" disabled label="checked" />
      <n-checkbox v-model="notChecked" disabled label="not checked" />
    </div>
    <br />

    <!-- Form Attrs -->
    <div>
      <n-checkbox v-model="isChecked" label="checkbox" name="checkbox" />
    </div>
    <br />
  </main>
</template>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
