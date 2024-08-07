<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-card>
          <v-card-title class="text-center text-h5">
            회원목록
          </v-card-title>
          <v-card-text>
            <v-data-table
                :headers="tableHeaders"
                :items="memberList"
                cell-class="text-center"
            >

            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableHeaders: [
        {title: 'I D', key: 'id', align: 'center'},
        {title: '이 름', key: 'name', align: 'center'},
        {title: '이메일', key: 'email', align: 'center'},
        {title: '주문 수량', key: 'orderCount', align:'center'}
      ],
      memberList: []
    }
  },
  async created() {
    // const token = localStorage.getItem('token');
    // //{"headers" : {"{Authorization" : `Bearer ${token}`, "Content-Type" : "application/json"}}
    // const headers = {Authorization: `Bearer ${token}`};
    // const response = await axios.get(`${process.env.VUE_APP_API_BASE_URI}`+'/member/list', {headers})member;
    try {
      const response = await axios.get(`${process.env.VUE_APP_API_BASE_URI}/member/list`);
      this.memberList = response.data.result.content;
    } catch (e) {
      console.log(e)
    }


  }
}
</script>

