import { http } from "../http-common";
import { Fish } from "./Fish";
import { reactive, watch } from "@vue/composition-api";

export const useFishApi = () => {
  const state = reactive({
    data: [] as Fish[]
  });

  watch(() => {
    http
      .get("fish")
      .then(response => {
        state.data = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  });

  return state;
};
