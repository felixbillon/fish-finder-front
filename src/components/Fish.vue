<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <div>FISH</div>
        <v-list-item-title>{{ fish.commonName }}</v-list-item-title>
        <v-list-item-subtitle>Test</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import { Fish } from "@/gateways/fish/Fish";

interface Props {
  fish: Fish;
}

export default createComponent<Props>({
  name: "Fish",
  props: {
    fish: Object
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
