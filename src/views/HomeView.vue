<template>
  <div class="home container">
    <div class="row">
      <h1>Prodotti Disponibili</h1>
      <div v-for="product in products" :key="product.id" class="col-md-6 mb-4">
        <div class="product card h-100">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-text">{{ product.description }}</p>
            <p>Prezzo: €{{ product.price }}</p>
            <div
              class="mt-auto button-group d-flex justify-content-between flex-wrap"
            >
              <button
                @click="addToCart(product)"
                class="btn btn-primary flex-fill w-100 mb-2"
              >
                Aggiungi al carrello
              </button>
              <button
                @click="addToWishlist(product)"
                class="btn btn-secondary flex-fill w-100 mb-2"
              >
                Aggiungi ai preferiti
              </button>
              <!-- Pulsante per vedere i dettagli -->
              <router-link
                :to="'/product/' + product.id"
                class="btn btn-info flex-fill w-100"
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
  padding: 20px;
}

.card {
  height: 100%;
}

button,
.btn {
  flex: 1;
  margin: 0 5px;
  text-align: center;
  background-color: black;
  border-color: black;
}

.button-group {
  width: 100%;
}

h3 {
  color: black !important;
  font-weight: bold;
}
p {
  color: black !important;
}

@media (max-width: 576px) {
  .button-group {
    flex-direction: column;
  }

  button,
  .btn {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
