<script setup lang="ts">
import Basic from './Basic.vue';
import Events from './Events.vue';
import Methods from './Methods.vue';
import WithLabel from './WithLabel.vue';
import State from './State.vue';
import InputType from './InputType.vue';
import Mask from './Mask.vue';
import Debounce from './Debounce.vue';
</script>
<template>
  <div class="demo-box">
    <Basic />
    <!-- <Events />
    <Methods />
    <WithLabel />
    <State />
    <InputType /> -->
    <Mask />
    <Debounce />
  </div>
</template>
<style lang="scss" scoped>
.demo-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
