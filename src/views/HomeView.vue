<template>
  <div class="home container">
    <div class="row">
      <h1>Prodotti Disponibili</h1>
      <div v-for="product in products" :key="product.id" class="col-md-6 mb-4">
        <div class="product card">
          <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-text">{{ product.description }}</p>
            <p>Prezzo: €{{ product.price }}</p>
            <div
              class="button-group d-flex justify-content-center align-items-center"
            >
              <button
                @click="addToCart(product)"
                class="btn btn-primary fixed-size-btn"
              >
                Aggiungi al carrello
              </button>
              <button
                @click="addToWishlist(product)"
                class="btn btn-secondary fixed-size-btn"
              >
                Aggiungi ai preferiti
              </button>
              <!-- Pulsante per vedere i dettagli -->
              <router-link
                :to="'/product/' + product.id"
                class="btn btn-info fixed-size-btn"
              >
                Vedi Dettagli
              </router-link>
            </div>
          </div>
        </div>
      </div>
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
h1 {
  color: white;
  margin-bottom: 40px;
}

.card-body {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

h3 {
  color: black !important;
  font-weight: bold;
}
p {
  color: black !important;
}

button {
  background-color: black;
  border-color: black;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.fixed-size-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0;
}

@media (min-width: 576px) {
  .button-group {
    flex-direction: row;
  }
}
</style>
