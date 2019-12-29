<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="space-between" style="height: 300px;">
          <Fish v-for="fish in state.data" :fish="fish" :key="fish.id" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { createComponent, onMounted } from "@vue/composition-api";
import { useFishApi } from "@/gateways/fish/fishApi";
import Fish from "@/components/Fish.vue";

export default createComponent({
  components: {
    Fish
  },
  name: "FishList",
  setup() {
    const state = useFishApi();
    console.log(state);
    return {
      state
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
