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
        { name: "ProdottoEsempio", price: 0 },
        { name: "Pasta", price: 2 },
        { name: "Carne", price: 9 },
        { name: "Verdure", price: 5 },
        { name: "Frutte", price: 6 },
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
