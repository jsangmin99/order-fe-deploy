<template>
<!--  <div>HelloWorld</div>-->
<!--  <HelloWorld/>-->

<!--  router view 를 통해 app.vue에서 화면 라우팅-->
  <HeaderComponent/>
  <router-view />
  <FooterComponent/>
</template>

<!--template 에는 HTML 코드가 들어가고, script 에는 js 코드가 들어감 디자인은 style 안에 들어감-->
<!--vue 파일 안에는 head 태그가 없고, head 의 공통 import 사항은 main.js 에 구성-->


<script>
// App.vue 는 vue 애플리케이션의 루트 컴포넌트입니다. ( 재활용이 가능한 화면 조각 )
// import HelloWorld from "@/components/HelloWorld";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>

</style>
