import RCheckbox from './checkbox.vue';

export { RCheckbox };

declare module 'vue' {
  export interface GlobalComponents {
    RCheckbox: typeof RCheckbox;
  }
}
