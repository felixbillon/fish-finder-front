<template>
  <div class="fish">
    <FishList />
  </div>
</template>

<script lang="ts">
import FishList from "@/components/FishList.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "fish",
  components: {
    FishList
  }
});
</script>
