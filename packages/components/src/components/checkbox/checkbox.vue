<script setup lang="ts">
import { computed, toRaw } from 'vue';
import type { Props } from './type';

const props = withDefaults(defineProps<Props>(), {
  trueValue: true,
  falseValue: false,
  indeterminateValue: null,
});
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: any): void;
}>();

const modelIsArray = computed(() => Array.isArray(props.modelValue));

const index = computed(() => {
  const value = toRaw(props.value);

  return modelIsArray.value === true
    ? props.modelValue.findIndex((opt: any) => toRaw(opt) === value)
    : -1;
});

const isTrue = computed(() =>
  modelIsArray.value === true
    ? index.value > -1
    : toRaw(props.modelValue) === toRaw(props.trueValue),
);

const isFalse = computed(() =>
  modelIsArray.value === true
    ? index.value === -1
    : toRaw(props.modelValue) === toRaw(props.falseValue),
);

const isIndeterminate = computed(
  () => isTrue.value === false && isFalse.value === false,
);

const classes = computed(
  () =>
    'r-checkbox' +
    (props.leftLabel === true ? ' r-checkbox--reverse' : '') +
    (props.disabled === true ? ` r-checkbox--disabled` : ''),
);

const innerClass = computed(() => {
  const state =
    isTrue.value === true
      ? 'truthy'
      : isFalse.value === true
        ? 'falsy'
        : 'indet';

  return `r-checkbox__inner r-checkbox__inner--${state}`;
});

const onClick = (e: Event) => {
  if (e !== void 0) {
    e.stopPropagation();
  }

  if (props.disabled !== true) {
    emit('update:modelValue', getNextValue());
  }
};

const getNextValue = () => {
  if (modelIsArray.value === true) {
    if (isTrue.value === true) {
      const copy = [...props.modelValue] as Array<any>;
      copy.splice(index.value, 1);
      return copy;
    }

    return props.modelValue.concat([props.value]);
  }

  if (isTrue.value === true) {
    return props.falseValue;
  } else if (isFalse.value === true) {
    return props.trueValue;
  }

  return getIndetNextValue();
};

const getIndetNextValue = () => {
  return props.trueValue;
};
</script>
<template>
  <div :class="classes" @click="onClick">
    <div :class="innerClass">
      <!-- input은 상속받아서 쓰는걸로 수정해야함 -->
      <input class="r-checkbox__native" type="text" />
      <div class="r-checkbox__bg">
        <svg class="r-checkbox__svg" viewBox="0 0 24 24">
          <path
            class="r-checkbox__truthy"
            fill="none"
            d="M4 12.6111L8.92308 17.5L20 6.5" />
          <path class="r-checkbox__indet" d="M4,14H20V10H4" />
        </svg>
      </div>
    </div>
    <div v-if="label" class="r-checkbox__label">
      {{ label }}
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
