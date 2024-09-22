<template>
  <div>
    <h2>Lista Prodotti</h2>
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
  props: ["products"],
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
