
// main.js 는 vue3에서 사용하는 시작점이다.

import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 에서 export한 router를 import 한다.
import router from '@/router/index.js'
import vuetify from "@/plugins/vuetify";
import '@mdi/font/css/materialdesignicons.css'
import axios from "axios";
import store from "@/store/index.js";

// createApp(App).mount('#app')
const app = createApp(App)

// axios 요청 인터셉터를 설정하여 모든 요청에 엑세스 토큰을 포함
axios.interceptors.request.use(
    config => {
        const token =localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 해당 인터셉팅가 무시되고 사용자의 본인 요청인 화면으로 라우팅
        return Promise.reject(error);
    }
)

// 401 응답을 받을 경우에 interceptor를 통해 전역적으로 rt를 통한 at 재발급
// 만약 refreshToken 도 401 응답을 받을 경우에 token제거후 login 화면으로 리다이렉트
axios.interceptors.response.use( // 응답을 받기 전에 처리
    response => { // 응답이 성공적으로 왔을 때
        return response; // 응답을 반환
    },
    async error => {
        if (error.response && error.response.status === 401 ){
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                localStorage.removeItem('token')
                alert('토큰이 만료되었습니다. 다시 로그인해주세요.1')
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URI}/refresh-token`, {refreshToken});
                alert('response : ' + response)
                const token = response.data.token;
                alert('token : ' + token)
                localStorage.setItem('token', response.data.result.token);
                alert('마지막');


                window.location.reload(); // 토큰이 갱신되었으므로 페이지 새로고침
            } catch (e) {
                localStorage.clear();
                alert('토큰이 만료되었습니다. 다시 로그인해주세요.2')
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
)

app.use(store);
app.use(router);
app.use(vuetify);

// #app 이라는 id를 가진 element에 App.vue를 렌더링한다.
//mount 는 vue2에서 사용하는 메소드이다.(무조건 마지막에 해줘야한다.)
app.mount('#app');
