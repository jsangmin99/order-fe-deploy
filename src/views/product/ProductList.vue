<!--일반 유저들이 쓰는 화면-->

<!-- 문자열로 넘길경우에는 변수면=, 그외에는 :변수면= -->
<template>
  <ProductListComponent
      :isAdmin="false"
      pageTitle="상품목록"
  >

  </ProductListComponent>
</template>


<script>
import ProductListComponent from '@/components/ProductListComponent.vue'

export default {
  components: {
    ProductListComponent
  }
}
</script>