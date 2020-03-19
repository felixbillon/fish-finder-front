import { getAllFish } from "@/gateways/fish/fishApi";
import { Fish } from "@/gateways/fish/Fish";
import { Module } from "vuex";
import { RootState } from "..";
import { SET_FISH } from "./mutations";
import { fetchFish } from "./action";

export interface FishState {
  fishes: Fish[];
}

export const fishModule: Module<FishState, RootState> = {
  namespaced: true,
  state: {
    fishes: []
  },
  mutations: {
    [SET_FISH](state, fish) {
      state.fishes = fish;
    }
  },
  actions: {
    [fetchFish]({ commit }) {
      return new Promise((resolve, reject) => {
        getAllFish()
          .then(response => {
            commit(SET_FISH, response.data);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
