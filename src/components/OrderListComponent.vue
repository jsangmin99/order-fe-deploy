<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card-title class="text-center text-h5">
          주문목록
        </v-card-title>
        <v-card-text>
          <v-data-table
              :headers="tableHeaders"
              :items="orderList"
              class="elevation-1"
              show-expand
          >
            <template v-slot:[`item.actions`]="{ item }">
              <!--              <template v-slot:[`item.actions`]="{ item }">-->

              <v-btn
                  color="red"
                  v-if="isAdmin && item.orderStatus === 'ORDERED'"
                  @click.stop="cancelOrder(item.id)"
              >
                CANCEL
              </v-btn>
            </template>
            <template v-slot:expanded-row="{item}">
              <v-row>
                <v-col>
                  <v-list-item v-for="orderItem in item.orderDetailDtos" :key="orderItem.id">
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ orderItem.productName }} {{ orderItem.productCount }}개
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>

            </template>
          </v-data-table>
        </v-card-text>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  props: ['isAdmin'],
  data() {
    return {
      orderList: [],
      tableHeaders: [
        {title: 'I D', key: 'id', align: 'center'},
        {title: '회원Email', key: 'memberEmail', align: 'center'},
        {title: '주문 상세', key: 'orderStatus', align: 'center'},
        {title: 'ACTION', key: 'actions', align: 'center'},
      ]
    }
  },
  async created() {
    if (this.isAdmin) {
      const response = await axios.get(`${process.env.VUE_APP_API_BASE_URI}/order/list`);
      this.orderList = response.data.result.content
    } else {
      const response = await axios.get(`${process.env.VUE_APP_API_BASE_URI}/order/myorders`);
      this.orderList = response.data.result.content
    }
  },
  methods: {
    async cancelOrder(id) {
      try {
        const response = await axios.patch(`${process.env.VUE_APP_API_BASE_URI}/order/${id}/cancel`);
        location.reload();
        console.log(response.data.result)
      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>