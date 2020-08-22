import Vue from 'vue';
import Vuex from 'vuex';
import io from 'socket.io-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 0,
    products: [],
    purchased: '',
  },
  mutations: {
    setPayload(state, payload) {
      state.products = payload.products;
      state.balance = payload.balance;
    },
    updateProduct(state, id) {
      const idx = state.products.findIndex((e) => e.id == id);
      const isSafe = state.balance - state.products[idx].price;
      if (state.products[idx].stock > 0 && isSafe > 0) {
        state.products[idx].stock--;
        state.balance -= state.products[idx].price;
        state.purchased = id;
        this.socket.emit('upPayload', id);
      }
    },
    upPayloadBroadcast(state, id) {
      const idx = state.products.findIndex((e) => e.id == id);
      if (state.products[idx].stock > 0) {
        state.products[idx].stock--;
        state.balance -= state.products[idx].price;
      }
    },
  },
  actions: {
    fetchProducts(context) {
      this.socket = io.connect('http://localhost:3000');
      this.socket.on('payload', (payload) => {
        context.commit('setPayload', payload);
      });
    },
    buy(context, id) {
      context.commit('updateProduct', id);
    },
    upPayloadBroadcast(context) {
      this.socket.on('upPayloadBroadcast', (id) => {
        context.commit('upPayloadBroadcast', id);
      });
    },
  },
});
