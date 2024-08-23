<template>
  <v-container>
    <v-row justify="center">
      <v-col class="text-center text-h5">
        장바구니 목록
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="auto">
        <v-btn @click="claerCart" color="secondary">장바구니 비우기</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="orderCreate" color="primary">주문하기</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
          <tr>
            <th class="text-left">제품 ID</th>
            <th class="text-center">상품명</th>
            <th class="text-right"> 제품수량</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="product in getProductsInCart" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td class="text-center">{{ product.quantity }}</td>
          </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>import {mapGetters} from 'vuex';
import axios from "axios";

export default {
  computed: {
    ...mapGetters(['getProductsInCart'])
  },
  methods: {
    clearCart() {
      this.$store.dispatch('clearCart');
    },
    async orderCreate() {
      const orderProducts = this.getProductsInCart.map(p => {
        return {
          productId: p.id,
          productCount: p.quantity
        }
      });
      console.log(orderProducts);

      if (orderProducts.length < 1) {
        alert("재고가 부족합니다. 주문 수량을 확인해주세요.")
      }
      const yesOrNo = confirm(`${orderProducts.length} 개의 상품이 주문됩니다.`);
      if (!yesOrNo) {
        console.log("주문이 취소되었습니다.");
      }
      try {
        await axios.post(`${process.env.VUE_APP_API_BASE_URI}/order/create`, orderProducts);
        alert("주문 완료 !")
        // window.location.reload();
        this.clearCart()
      } catch (e) {
        console.log(e);
        alert("주문 실패 !")
      }

    }
  }
}
</script>