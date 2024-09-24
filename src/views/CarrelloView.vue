<template>
  <div>
    <h1>Il tuo carrello</h1>
    <div v-if="cart && cart.length > 0">
      <ul>
        <li v-for="(item, index) in $store.state.cart" :key="index">
          {{ item[0] }} - €{{ item[1] }}
          <button @click="removeFromCart(index)">Rimuovi</button>
        </li>
      </ul>
      <p>Totale: €{{ total }}</p>
    </div>
    <p v-else>Il carrello è vuoto</p>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.state.cart.reduce((acc, item) => acc + item[1], 0); // Somma il prezzo (item[1])
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.commit("remove_cart", index); // Usa la mutazione `remove_cart`
    },
  },
};
</script>

<style scoped>
/* Stili per la visualizzazione del carrello */
</style>
