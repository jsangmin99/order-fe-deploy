<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="2" md="4">
        <v-card>
          <v-card-title class="text-h5 text-center">
           로그인
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="doLogin">
              <v-text-field
                  label="email"
                  v-model="email"
                  prepend-icon="mdi-email"
                  type="email"
                  required
              ></v-text-field>
              <v-text-field
                  label="비밀번호"
                  type="password"
                  prepend-icon="mdi-lock"
                  v-model="password"
                  required
              ></v-text-field>
              <v-row>
                <v-col cols="6">
                  <v-btn type="submit" block color="blue">로그인</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block color="red" @click="showPasswordModal">비밀번호변경</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
<!--    resetPassword가 true 가 될떄 해당 모당창이 보여짐 -->
<!--    @update:dialog 는 modal 컴포넌트가 update:dialog라는 이벤트를 발생시킬꺠 실행될 이벤트 핸들러를 정의-->
<!--    $event 는 자식 요소로부터 전달된 값, true/false 가 전달됨-->
    <ResetPasswordModal
      v-model="resetPassword"
      @update:dialog="resetPassword = $event"
    >

    </ResetPasswordModal>



  </v-container>
</template>

<script>
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import ResetPasswordModal from "@/views/member/ResetPasswordModal";

export default {
  components:{
    ResetPasswordModal
  },
  data() {
    return {
      email: '',
      password: '',
      resetPassword: false,
    }
  },
  methods: {
    async doLogin() {
      try {
        const loginData = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post(`${process.env.VUE_APP_API_BASE_URI}/doLogin`, loginData);
        const token = response.data.result.token
        const refreshToken = response.data.result.refreshToken;
        console.log(jwtDecode(token).role);
        const role = jwtDecode(token).role;

        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('role', role);
        // this.$router.push('/'); // 헤더가 안바뀌는 문제
        window.location.href = '/';

      } catch (error) {
        console.error(error);
      }
    },
    showPasswordModal(){
      this.resetPassword = true;
    }
  }
}

</script>