<template>
  <h1>Watch 예제</h1>
  <div>count : {{count}}</div>
  <button @click="increment">increment</button>
  <br> <br>
  <h1>Update예제</h1>
  <div>message {{message}}</div>
  <button @click="updateMessage">updateMessage</button>

</template>

<script>
export default{
  data(){
    return{
      count: 0,
      message: "미리지정한 메세지"
    }
  },
  // 특정 변수값의 변경사항을 인지하는 hook함수
  watch:{
    //인지하고자 하는 변수값과 일치되는 함수명
    count(){
      console.log('count가 변경되었습니다.');
    }
  },
  //dom 객체(화면)의 변경사항을 인지 하는 hook 함수ㅏㅓ
  updated() {
    alert("dom 요소 변경")
  },

  methods: {
    increment() {
      this.count++;
    },
    updateMessage() {
      this.message = "메세지가 변경되었습니다.";
    },
  }

}

</script>