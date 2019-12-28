<template>
  <div>
    {{ fish.commonName }}
  </div>
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
