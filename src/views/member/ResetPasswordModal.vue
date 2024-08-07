<template>
  <v-dialog max-width="500px">
    <v-card>
      <v-card-title class="text-h5 text-center">
        비밀번호 변경하기
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="resetPassword">
          <v-text-field
              label="email"
              v-model="email"
              prepend-icon="mdi-email"
              type="email"
              required
          ></v-text-field>
          <v-text-field
              label="기존비밀번호"
              type="password"
              prepend-icon="mdi-lock"
              v-model="asIsPassword"
              required
          ></v-text-field>
          <v-text-field
              label="신규비밀번호"
              type="password"
              prepend-icon="mdi-lock"
              v-model="toBePassword"
              required
          ></v-text-field>
            <v-btn type="submit" block color="blue">비밀번호 재설정 요청</v-btn>
            <v-btn block color="red" @click="closeModal">닫기</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      asIsPassword: '',
      toBePassword: '',
    }
  },
  methods: {
    async resetPassword() {
      const requestData = {
        email: this.email,
        password: this.asIsPassword,
        newPassword: this.toBePassword
      }

      try {
        alert("1 : " + requestData)
        //{body} => body : {email:xxx, pasword:xxx, newPassword:xxx}
        //body => {email:xxx, pasword:xxx, newPassword:xxx}
        const response = await axios.patch(`${process.env.VUE_APP_API_BASE_URI}/member/reset-password`, requestData);
        alert("2 : " +response)
        if (response.data.result === 'success')
          alert('비밀번호가 변경되었습니다.');
        this.closeModal();
      }catch (e){
        console.log(e);
        alert(e.response?.data?.error_message || `입력값을 확인해 주세요`);
      }
    },
    closeModal() {
      // this.emit은 veu 에서 컴포넌트간의 이벤트를 전달하는 매커니즘
      // 자식 컴포넌트에서 this.$emit 을 호출하면 update:dialog 라는 이벤트가 실행되고, false 부모 컴포넌트로 전달
      this.$emit('update:dialog', false);

    }
  }
}


</script>