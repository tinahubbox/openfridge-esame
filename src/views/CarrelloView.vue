<template>
  <div>
    <h1>Il tuo carrello</h1>
    <div v-if="cart && cart.length > 0">
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - €{{ item.price }}
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
  props: ["cart"],
  computed: {
    total() {
      return this.cart.reduce((acc, product) => acc + product.price, 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.$emit("remove-from-cart", index);
    },
  },
};
</script>

<style scoped>
/* Stili per la visualizzazione del carrello */
</style>
