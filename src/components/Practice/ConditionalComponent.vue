<template>
  <h1>ConditionalComponent</h1>

  <button @click="login">로그인</button>
  <div v-if="isLogined"> 환영합니다. 고객님</div>
  <div v-else>로그인 해주세요 </div>
  <br><br><br>

  <h1>상품 목록 조회</h1>
  <ul>
<!--    v-for에서는 반드시 key 값을 지정, key 를 지정함으로서 각 요소마다 고유 식별-->
    <li v-for="product in products" :key="product.id">{{product.name}}</li>
  </ul>


</template>

<script>
export default{
  data(){
    return{
      isLogined: false,
      products:[
        {id:1 ,name:"apple"},
        {id:2 ,name:"banana"},
        {id:3 ,name:"melon"},
        {id:4 ,name:"kiwi"},
        {id:5 ,name:"grape"}
      ]
    }
  },
  methods: {
    login(){
      this.isLogined = true;
    }
  }

};

</script>