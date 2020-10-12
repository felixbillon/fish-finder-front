<template>
  <v-container fluid>
    <FishAddModal
      :isDisplay="isFishModalDisplayed"
      @close="toogleFishAddModal()"
      @save="saveFish"
    />
    <v-col cols="12">
      <v-row align="center" justify="start">
        <FishComponent v-for="fish in fishes" :fish="fish" :key="fish.id" />
      </v-row>
    </v-col>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="toogleFishAddModal()"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import FishComponent from "@/components/Fish/Fish.vue";
import FishAddModal from "@/components/FishAddModal/FishAddModal.vue";
import { useState, useActions, useMutations } from "@u3u/vue-hooks";
import { Fish } from "../../gateways/fish/Fish";

export default defineComponent({
  components: {
    FishComponent,
    FishAddModal
  },
  name: "FishList",
  setup() {
    const state = {
      ...useState("fish", ["fishes", "isFishModalDisplayed"])
    };

    const mutations = {
      ...useMutations("fish", ["toogleFishAddModal"])
    };

    const { toogleFishAddModal } = mutations;

    const actions = {
      ...useActions("fish", ["fetchFish", "addFish"])
    };

    const { fetchFish, addFish } = actions;

    fetchFish();

    function saveFish(fish: Fish) {
      addFish(fish) && toogleFishAddModal();
    }

    // function upload()

    return { ...state, ...mutations, ...actions, saveFish };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
