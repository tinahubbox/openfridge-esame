import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      favourites: [],
      cart: [],
      tot_price: 0,
      products: [
        // Simula una lista di prodotti
        {
          id: 1,
          name: "Pasta",
          description:
            "Alimento base della cucina italiana, disponibile in vari formati. Perfetta per piatti con sugo.",
          price: 2,
        },
        {
          id: 2,
          name: "Carne",
          description:
            "Fonte ricca di proteine, ideale per grigliate, arrosti e piatti tradizionali.",
          price: 9,
        },
        {
          id: 3,
          name: "Verdure",
          description:
            "Fresche e nutrienti, ideali per contorni, insalate e zuppe.",
          price: 5,
        },
        {
          id: 4,
          name: "Frutta",
          description:
            "Ricca di vitamine, perfetta per snack salutari o dessert naturali.",
          price: 6,
        },
      ],
    };
  },
  getters: {
    searchProducts: (state) => (query) => {
      if (!query) return state.products; // Se la query è vuota, restituisci tutti i prodotti
      return state.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ); // Filtra i prodotti in base al nome
    },
  },
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
      state.cart.splice(index, 1); // Rimuove l'elemento dall'array cart
      state.tot_price -= priceToRemove; // Aggiorna il totale
    },
    addProduct(state, product) {
      const newProduct = {
        id: state.products.length + 1, // Incrementa l'ID automaticamente
        ...product,
      };
      state.products.push(newProduct); // Aggiunge il nuovo prodotto allo stato
    },
  },
  actions: {},
  modules: {},
});
