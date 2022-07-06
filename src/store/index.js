import axios from "axios";
import { createStore } from "vuex";
import router from "../router/index";

export default createStore({
  state: {
    token: JSON.parse(localStorage.getItem("token")) || null,
    err: null,
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setErr(state, payload) {
      state.err = payload;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const res = await axios.post("https://reqres.in/api/login", {
          email: payload.email,
          password: payload.password,
        });
        commit("setToken", res.data.token);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        router.push("/");
      } catch (err) {
        const { error } = err.response.data;
        commit("setErr", error);
      }
    },
  },
  modules: {},
});
