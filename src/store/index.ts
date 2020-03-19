import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { fishModule } from "./module/fish";

Vue.use(Vuex);

export interface RootState {}

const store: StoreOptions<RootState> = {
  state: {},
  mutations: {},
  actions: {},
  modules: {
    fish: fishModule
  },
  strict: process.env.NODE_ENV !== "production"
};

export default new Vuex.Store(store);
