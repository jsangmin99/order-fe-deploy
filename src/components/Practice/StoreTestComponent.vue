<template>
  <h1>store test component1</h1>
  <StoreTestComponent2/>
  <StoreTestComponent3/>
</template>
<script>
import StoreTestComponent2 from "@/components/Practice/StoreTestComponent2";
import StoreTestComponent3 from "@/components/Practice/StoreTestComponent3";
export default {
  components: {
    StoreTestComponent2,
    StoreTestComponent3
  }
}
</script>