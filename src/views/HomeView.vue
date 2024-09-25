<template>
  <div class="home container">
    <div class="row">
      <h1>Prodotti Disponibili</h1>

      <!-- Form di ricerca -->
      <div class="col-12 mb-4">
        <input
          v-model="searchQuery"
          type="text"
          class="form-control"
          placeholder="Cerca prodotti..."
        />
      </div>

      <!-- Risultati filtrati della ricerca -->
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="col-md-6 mb-4"
      >
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

      <!-- Form per aggiungere nuovi prodotti -->
      <div class="col-12 mt-4">
        <h2>Aggiungi un nuovo prodotto</h2>
        <input
          v-model="newProduct.name"
          type="text"
          placeholder="Nome del prodotto"
          class="form-control mb-2"
        />
        <input
          v-model="newProduct.description"
          type="text"
          placeholder="Descrizione"
          class="form-control mb-2"
        />
        <input
          v-model.number="newProduct.price"
          type="number"
          placeholder="Prezzo"
          class="form-control mb-2"
        />
        <button @click="addNewProduct" class="btn btn-success">
          Aggiungi Prodotto
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      searchQuery: "", // Stringa di ricerca
      newProduct: {
        name: "",
        description: "",
        price: null,
      },
    };
  },
  computed: {
    ...mapGetters(["searchProducts"]), // Usa il getter per la ricerca
    filteredProducts() {
      return this.searchProducts(this.searchQuery); // Applica la ricerca
    },
  },
  methods: {
    ...mapMutations(["add_wishlist", "add_cart", "addProduct"]),
    addToCart(product) {
      this.add_cart({ product, price: product.price }); // Usa la mutation di Vuex per il carrello
    },
    addToWishlist(product) {
      this.add_wishlist(product); // Usa la mutation di Vuex per la wishlist
    },
    addNewProduct() {
      if (
        this.newProduct.name &&
        this.newProduct.description &&
        this.newProduct.price
      ) {
        this.addProduct(this.newProduct); // Aggiunge il prodotto tramite Vuex
        // Resetta il form
        this.newProduct.name = "";
        this.newProduct.description = "";
        this.newProduct.price = null;
      } else {
        alert("Per favore, riempi tutti i campi.");
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 20px;
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
  width: 100%;
}

.btn-success {
  margin-bottom: 10px;
  margin-top: 10px;
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
