<template>
  <v-app-bar app style="background-color: lightgreen;">
    nav-bar
  </v-app-bar>
  <!-- v-container, v-row, v-col -->
  <v-container>
    <v-row>
      <!-- col 은 전체 사이즈가 12 이므로 둘이 나눠 가진다. 더 크게 잡으면 아래로 밀림 ! -->
      <v-col cols="8" style="background-color:violet;">
        123
      </v-col>
      <v-col cols="4" style="background-color:lightskyblue">
        123
      </v-col>
    </v-row>
    <v-row>
      <!-- v-card : 회원 가입, 로그인할 때 자주 쓰임 -->
      <v-card>
        <!-- v-card-title (제목), card-text (내용) -->
        <v-card-title style="background-color: aliceblue;">
          👋🏻 안내 문구 _ 카드 타이틀
        </v-card-title>
        <v-card-text>
          <br/>
          🫠 반 갑 습 니 다 _ 카드 텍스트
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-simple-table>
        <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>홍길동</td>
          <td>test@test.com</td>
        </tr>
        <tr>
          <td>김길동</td>
          <td>test2@test.com</td>
        </tr>
        </tbody>
      </v-simple-table>
    </v-row>

  </v-container>
  <v-card>
    <v-card-title style="background-color: khaki;">
      🙇🏻♀️ 회원 가입
    </v-card-title>
    <v-card-text style="background-color: cornsilk">
      <v-form>
        <v-text-field
            label="name"
            type="txt">
        </v-text-field>
        <v-text-field
            label="email"
            type="email">
        </v-text-field>
        <v-text-field
            label="password"
            type="password">
        </v-text-field>
        <v-btn color="primary">제출하기</v-btn>
      </v-form>
    </v-card-text>
  </v-card>

  <!--  모달창-->
  <br><br><br>
  <v-btn @click.stop="cancel()">취소버튼</v-btn>
  <!--  모달창을 위한 v-dialog -->
  <v-dialog v-model="dialog" max-width="400px">
    <v-card>
      <v-card-title>Really???????? 정말 취소?</v-card-title>

      <v-card-actions>
        <v-btn color="primary">확인</v-btn>
        <v-btn color="secondary" @click="dialog=false">취소</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-btn href="/practice/modeling">라우팅1</v-btn>
  <v-btn :to="{path: '/practice/modeling'}">SPA라우팅(router) 기능 활용</v-btn>
  <v-btn :to="{name:'ModelingComponent'}">SPA라우팅(router) 기능 활용(name 호출방식)</v-btn>

</template>

<script>
export default {
//  변수설정 : data() 함수를 통해 변수 세팅
  data() {
    return {
      dialog: false, //false : 모달창이 안보임
    }
  },
  //  함수 설정 : methods 객체 안에 함수를 선언
  methods: {
    cancel() {
      //this 는 data() 함수 안에 있는 변수를 가리킴
      this.dialog = true; //true : 모달창이 보임
    }
  }
}
</script>



















