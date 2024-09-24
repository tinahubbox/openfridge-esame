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
      state.cart.push([payload.product, payload.price]); // Aggiunge prodotto e prezzo
      state.tot_price += payload.price; // Aggiunge il prezzo al totale
    },
    remove_cart(state, index) {
      const priceToRemove = state.cart[index][1]; // Estrae il prezzo dell'articolo da rimuovere
      state.cart.splice(index, 1); // Rimuove l'elemento dall'array `cart`
      state.tot_price -= priceToRemove; // Aggiorna il totale
    },
  },
  actions: {},
  modules: {},
});
