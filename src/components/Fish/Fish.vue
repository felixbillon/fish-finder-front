<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <div>FISH</div>
        <v-list-item-title>{{ fish.commonName }}</v-list-item-title>
        <v-list-item-subtitle>{{ fish.scientificName }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <img v-if="fish.picture" :src="fish.picture" alt="fish picture" />
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { Fish } from "@/gateways/fish/Fish";

interface Props {
  fish: Fish;
}

export default defineComponent<Props>({
  name: "Fish",
  props: {
    fish: Object
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-card {
  width: 400px;
}
</style>
