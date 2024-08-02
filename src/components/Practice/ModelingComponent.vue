<template>
<!--  HTML 요소의 동적 값 표시-->
<!--  HTML 요소 안에 중괄호 2번을 사용함으로서 script에 정의된 변수값을 화면에 표시-->
  <h1> hello world {{language}}</h1>

<!--  v-model 은 양방향 데이터 바인딩을 하고있다.-->
  <input type="text" :value="value1">
  <input type="text" v-model="value2">
  <button @click="showValue">변수변경사항 확인</button>
  <br>
<!--  increment 버튼 생성 -> 0부터 올라가는게 실시가능로 보여지는 화면-->
  <h1>{{count}}</h1>
  <button @click="increment">increment</button>
  <button @click="reset">리셋버튼</button>

  <h1>{{doubleCount}}</h1>

  <br>
  <input type="text" v-model="count2">
  <br>
  <button @click="increment2">increment</button>
  <button @click="reset2">리셋버튼</button>
  <br>

</template>

<script>
export default{
  data() {
    return {
      language: "돌아와 자바!!!!!!",
      value1: "JAVA",
      value2: "python",
      count: 0,
      count2: 0
    }
  },
  //computed 는 종속된 반응형 데이터가 변경될때 변경될떄에 함수를 다시 실행하여 값을 계산하는 함수
  computed:{
    doubleCount(){
      return this.count2 * 2;
    }

  },
  methods: {
    cancel() {
      this.dialog = true;
    },
    showValue() {
      alert(this.value1 + " " + this.value2);
    },
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
    increment2() {
      this.count2++;
    },
    reset2(){
      this.count2 = 0;
    }
  }

};
</script>