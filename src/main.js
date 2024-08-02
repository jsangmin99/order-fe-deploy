
// main.js 는 vue3에서 사용하는 시작점이다.

import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 에서 export한 router를 import 한다.
import router from '@/router/index.js'
import vuetify from "@/plugins/vuetify";

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router);
app.use(vuetify);

// #app 이라는 id를 가진 element에 App.vue를 렌더링한다.
//mount 는 vue2에서 사용하는 메소드이다.(무조건 마지막에 해줘야한다.)
app.mount('#app');
