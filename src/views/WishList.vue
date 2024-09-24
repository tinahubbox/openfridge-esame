<!-- src/views/WishList.vue -->

<!-- eslint-disable -->
<template>
  <div class="preferiti">
    <h1>I tuoi prodotti preferiti</h1>
    <div v-if="$store.state.favourites && $store.state.favourites.length > 0">
      <ul>
        <li v-for="(item, index) in $store.state.favourites" :key="index">
          <p>{{ item.name }}</p>
          <!-- Assumendo che "item" abbia una proprietà "name" -->
        </li>
      </ul>
    </div>
    <p v-else>Non hai prodotti preferiti</p>
  </div>
</template>

<div>


</div>

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
