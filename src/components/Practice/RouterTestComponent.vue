<template>
  <h1>화면 라우팅 테스트</h1>
  <div>
    <button style="background-color: aqua" @click="spaMove1">medeling 페이지로 이동(url)</button>
  </div>
  <div>
    <button style="background-color: lightskyblue" @click="spaMove2"> modeling 페이지로 이동(name)</button>
  </div>
  <div>
    <button style="background-color: aqua" @click="hrefMove"> modeling 페이지로 이동(href)</button>
  </div>
  <div>
    <button style="background-color: lightskyblue" @click="reloadPage"> 현재화면 Reload </button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    //route를 통한 spa 방식은 create함수가 실행되지 않음
    spaMove1(){
      this.$router.push('/practice/modeling');
    },
    spaMove2(){
      this.$router.push({name: 'ModelingComponent'});
    },
    hrefMove(){
      location.href = '/practice/modeling';
    },
    reloadPage() {
      location.reload();
    }
  }
};
</script>