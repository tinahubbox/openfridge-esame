<template>
  <div>
    <h1>Dettaglio del prodotto</h1>
    <p>Nome: {{ product.name }}</p>
    <p>Prezzo: €{{ product.price }}</p>
    <router-link to="/">Torna alla lista</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"], // Riceve l'id del prodotto come prop
  data() {
    return {
      products: [
        { name: "Prodotto 1", price: 10 },
        { name: "Prodotto 2", price: 20 },
        { name: "Prodotto 3", price: 30 },
      ],
    };
  },
  computed: {
    product() {
      return this.products[this.id]; // Trova il prodotto corrispondente all'id
    },
  },
};
</script>
