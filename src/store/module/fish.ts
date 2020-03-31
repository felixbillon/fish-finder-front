import { getAllFish, saveFish } from "@/gateways/fish/fishApi";
import { Fish } from "@/gateways/fish/Fish";
import { Module } from "vuex";
import { RootState } from "..";
import { toogleFishAddModal, setFish } from "./mutations";
import { fetchFish, addFish } from "./action";

export interface FishState {
  fishes: Fish[];
  isFishModalDisplayed: boolean;
}

export const fishModule: Module<FishState, RootState> = {
  namespaced: true,
  state: {
    fishes: [],
    isFishModalDisplayed: false
  },
  mutations: {
    [setFish](state, fish) {
      state.fishes = fish;
    },
    [toogleFishAddModal](state) {
      state.isFishModalDisplayed = !state.isFishModalDisplayed;
    }
  },
  actions: {
    [fetchFish]({ commit }) {
      return new Promise((resolve, reject) => {
        getAllFish()
          .then(response => {
            commit(setFish, response.data);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    [addFish]({ dispatch }, fish: Fish) {
      return new Promise((resolve, reject) => {
        saveFish(fish)
          .then(response => {
            dispatch(fetchFish);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
