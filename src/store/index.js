import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      favourites: [],
      cart: [],
      tot_price: 0,
    };
  },
  getters: {},
  mutations: {
    add_wishlist(state, product) {
      state.favourites.push(product);
    },
    add_cart(state, payload) {
      state.cart.push(payload.product); // Aggiunge il prodotto al carrello
      state.tot_price += payload.price; // Aggiunge il prezzo al totale
    },
  },
  actions: {},
  modules: {},
});
