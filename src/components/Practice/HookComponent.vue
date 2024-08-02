<template>
  <h1>  생명주기 함수 </h1>
  <p>{{data1}}</p>
  <p>{{data2}}</p>
  <p>{{data3}}</p>

</template>

<script>
export default{
  data(){
    return{
      data1: "변경될데이터1",
      data2: "변경될데이터2",
      data3: "변경될데이터3",

    }
  },
//  화면이 열리기 전( vue 인스턴스가 생성되기 이전) 에 실행되는 함수
  created(){
    this.data2 = "created Data2";
  },
  beforeMount() {
    window.addEventListener("resize", this.resize);
  },

//  vue컴포넌트들이 DOM에 마운트된 이후(화면에 그려진 이후)에 실행되는 함수
  mount(){
    console.log("mounted");
    this.data3 = "mounted Data3";
  },
  //컴포넌트가 화면에서 제거될때 아래 함수 실행, beforeDestroy로 사용하기도함
  // 웹소켓, sse연결 등 서버와의 연결을 끊어주고 나가야하는 시점
  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize(){
      alert("화면크기가 변경되었습니다.")
    }
  }

}

</script>