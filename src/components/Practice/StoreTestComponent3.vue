<template>
  <h1>store test component3</h1>
  <p>count: {{getCount}}</p>
  <br>
  <input type="text" v-model="getMessage">

</template>
<script>
import {mapGetters} from "vuex";

export default {

  computed: {
    ...mapGetters(['getCount','getMessage'])
  },
  methods: {
  }
}
</script>