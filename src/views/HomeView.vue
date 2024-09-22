<template>
  <div class="home">
    <h1>Prodotti Disponibili</h1>
    <div v-for="product in products" :key="product.id" class="product">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Prezzo: €{{ product.price }}</p>
      <button @click="addToCart(product)">Aggiungi al carrello</button>
    </div>
  </div>
</template>

<script>
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
          id: 3,
          name: "Frutta",
          description: "Descrizione Prodotto 3",
          price: 30,
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
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
