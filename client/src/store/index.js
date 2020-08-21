import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 1000000000,
    products: [],
    purchased: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setPurchased(state, id) {
      state.products.forEach((product) => {
        if (product.id === id) {
          state.money -= product.price;
          state.total += product.price;
        }
      });
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        const { data } = await axios({
          url: `http://localhost:3000`,
        });
        context.commit('setProducts', data);
      } catch (err) {
        console.log(err.response);
      }
    },
    buy(context, data) {
      context.commit('setPurchased', data);
    },
  },
});
