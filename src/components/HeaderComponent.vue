<template>
  <v-app-bar app dark>
    <v-container>
      <v-row align="center">
        <v-col class="d-flex justify-start">
          <div v-if="userRole === 'ADMIN'">
            <v-btn :to="{path:'/member/list'}">회원관리</v-btn>
            <v-btn :to="{path:'/product/manage'}">상품관리</v-btn>
            <v-btn href="/order/list" >실시간주문{{liveQuantity}}</v-btn>
          </div>
        </v-col>

        <v-col class="text-center">
          <v-btn :to="{path:'/'}">Home</v-btn>
        </v-col>

        <v-col class="d-flex justify-end">
          <v-btn v-if="isLogin" :to="{path:'/order/cart'}">장바구니({{ getTotalQuantity }})</v-btn>
          <v-btn :to="{path:'/product/list'}">상품목록</v-btn>
          <v-btn v-if="isLogin" :to="{path:'/mypage'}">MyPage</v-btn>
          <v-btn v-if="!isLogin" :to="{path:'/member/create'}">회원가입</v-btn>
          <v-btn v-if="!isLogin" :to="{path:'/login'}">login</v-btn>
          <v-btn v-if="isLogin" @click="doLogout">logout</v-btn>
        </v-col>

      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex';
// 서버와 실시간 알림서비스를 위한 의존성 추가
import {EventSourcePolyfill} from 'event-source-polyfill';

export default {
  data() {
    return {
      userRole: null,
      isLogin: false,
      liveQuantity: 0,
    }
  },
  computed: {
    ...mapGetters(['getTotalQuantity'])
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
      this.userRole = localStorage.getItem('role');
    }
    //sse를 위한 연결 코드
    if (this.userRole === 'ADMIN') {
      console.log("!1111")
      let sse = new EventSourcePolyfill(`${process.env.VUE_APP_API_BASE_URI}/subscribe`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
      );
      sse.addEventListener('connected', (event) => {
        console.log(event);
      })
      sse.addEventListener('ordered' , (event) => {
        console.log(event.data);
        this.liveQuantity++;
      })
      sse.onerror = (error) => {
        console.log(error);
        sse.close();
      }
      ;
    }

  },
  methods: {
    doLogout() {
      localStorage.clear();
      window.location.reload();
    }
  }
};
</script>