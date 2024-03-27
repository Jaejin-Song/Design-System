import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { install } from '@common/components';

const app = createApp(App);

app.use(router);
app.use(install);

app.mount('#app');
