import { RouteRecordRaw } from 'vue-router';
import Layout from '../layouts/index.vue';
import componentList from './componentList';

const routes: RouteRecordRaw[] = [
  {
    path: '/vue-components',
    component: Layout,
    children: [
      ...Object.keys(componentList).map((key) => {
        const parts = key.substring(1, key.length - 10).split('/');
        const len = parts.length;
        const componentName = parts[len - 1].toLowerCase();
        const path = `/vue-components/${componentName}`;

        const acc: RouteRecordRaw = {
          component: () => import(key),
          path,
          name: componentName,
        };

        return acc;
      }),
    ],
  },
  { path: '/:lang(.*)', redirect: '/vue-components' },
];

export default routes;
