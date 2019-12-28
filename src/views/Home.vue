<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FishList />
  </div>
</template>

<script>
import FishList from "@/components/FishList.vue";

export default {
  name: "home",
  components: {
    FishList
  }
};
</script>
