<template>
  <v-container>
    <v-row justify="center">
      <!--      화면크기가 small 이상(스마트폰, 태블릿 일떄) : sm-->
      <!--      화면크기가 medium 이상(데스크탑일때) :md-->
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5 text-center">
            회원가입
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="memberCreate">
              <v-text-field
                  label="이름"
                  v-model="name"
                  prepend-icon="mdi-account"
                  required
              ></v-text-field>
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
              <v-text-field
                  label="도시"
                  prepend-icon="mdi-city"
                  v-model="city"
              ></v-text-field>
              <v-text-field
                  label="상세주소"
                  prepend-icon="mdi-home"
                  v-model="street"
              ></v-text-field>
              <v-text-field
                  label="우편번호"
                  prepend-icon="mdi-mailbox"
                  v-model="zipcode"
              ></v-text-field>
              <!--                  block 은 부모컨테이너 너비만큼 꽉채우는것 -->
              <v-btn block type="submit" color="primary">회원가입</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "홍길동",
      email: "hong@gmail.com",
      password: "12341234",
      city: "",
      street: "",
      zipcode: ""
    }
  },
  methods: {
    async memberCreate() {
      try {
        const registerData = {
          name: this.name,
          email: this.email,
          password: this.password,
          address: {
            city: this.city,
            street: this.street,
            zipcode: this.zipcode
          }
        }
        console.log(registerData.address.city);
        await axios.post(`${process.env.VUE_APP_API_BASE_URI}`+'/member/create', registerData)
        this.$router.push({path: '/login'});
      } catch (error) {
        const errorMessage = error.response.data.status_message;
        console.error(errorMessage);
        alert(errorMessage);
      }
    }
  },
  async created() {
  }
}
</script>