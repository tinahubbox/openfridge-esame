<template>
  <div class="home">
    <h1>Prodotti Disponibili</h1>
    <div v-for="product in products" :key="product.id" class="product">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Prezzo: €{{ product.price }}</p>
      <button @click="addToCart(product)">Aggiungi al carrello</button>
      <button @click="addToWishlist(product)">Aggiungi ai preferiti</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Pasta",
          description: "Descrizione Prodotto 1",
          price: 10,
        },
        {
          id: 2,
          name: "Carne",
          description: "Descrizione Prodotto 2",
          price: 20,
        },
        {
          id: 3,
          name: "Verdure",
          description: "Descrizione Prodotto 3",
          price: 30,
        },
        {
          id: 4,
          name: "Frutta",
          description: "Descrizione Prodotto 4",
          price: 30,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["add_wishlist", "add_cart"]),
    addToCart(product) {
      this.add_cart({ product, price: product.price }); // Usa la mutation di Vuex per il carrello
    },
    addToWishlist(product) {
      this.add_wishlist(product); // Usa la mutation di Vuex per la wishlist
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
