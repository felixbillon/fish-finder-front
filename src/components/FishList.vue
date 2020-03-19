<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row align="center" justify="start">
        <Fish v-for="fish in fishes" :fish="fish" :key="fish.id" />
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import Fish from "@/components/Fish.vue";
import { createNamespacedHelpers } from "vuex";
import { useState, useActions } from "@u3u/vue-hooks";

export default defineComponent({
  components: {
    Fish
  },
  name: "FishList",
  setup() {
    const state = {
      ...useState("fish", ["fishes"])
    };

    const actions = {
      ...useActions("fish", ["fetchFish"])
    };

    const { fetchFish } = actions;

    fetchFish();

    return { ...state };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
