<template>
  <v-dialog v-model="isDisplay" persistent max-width="800px">
    <v-card>
      <v-card-title>
        <span class="headline">New Fish</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="state.valid" lazy-validation>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="state.form.commonName"
                  label="Common name*"
                  :counter="250"
                  :rules="formRules.commonName"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="state.form.scientificName"
                  label="Scientific name*"
                  :counter="250"
                  :rules="formRules.scientificName"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-subheader class="pl-0">Max lenght (ft)*</v-subheader>
                <v-slider
                  v-model="state.form.maxLenght"
                  thumb-label="always"
                  :thumb-size="16"
                  :max="50"
                ></v-slider>
                <template v-slot:append>
                  <v-text-field
                    v-model="state.form.maxLenght"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-col>
              <v-col cols="12">
                <v-subheader class="pl-0">Max weight (lbs)*</v-subheader>
                <v-slider
                  v-model="state.form.maxWeight"
                  thumb-label="always"
                  :thumb-size="16"
                  :max="250"
                ></v-slider>
                <template v-slot:append>
                  <v-text-field
                    v-model="state.form.maxWeight"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  accept="image/*"
                  label="Picture"
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="close()">Close</v-btn>
        <v-btn text @click="save()" :disabled="!state.valid">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";

export default defineComponent({
  name: "FishAddModal",
  props: {
    isDisplay: Boolean
  },
  setup(props, context) {
    const form = ref(null);

    const formRules = {
      commonName: [
        (name: string) => !!name || "Common name is required",
        (name: string) =>
          (name && name.length <= 250) ||
          "Common name must be less than 250 characters"
      ],
      scientificName: [
        (name: string) => !!name || "Scientific name is required",
        (name: string) =>
          (name && name.length <= 250) ||
          "Scientific name must be less than 250 characters"
      ]
    };

    const state = reactive({
      valid: true,
      form: {
        commonName: "",
        scientificName: "",
        maxLenght: 0,
        maxWeight: 0
      }
    });

    function close() {
      (form.value as any).reset();
      context.emit("close");
    }

    function save() {
      (form.value as any).validate();
      context.emit("save", state.form);
    }

    return { close, save, form, state, formRules };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
