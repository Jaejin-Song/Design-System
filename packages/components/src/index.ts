import type { App } from 'vue';
import * as components from './components';
import './css/index.scss';

export const install = (app: App) => {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key as keyof typeof components]);
  });
};
