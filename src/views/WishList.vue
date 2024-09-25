<!-- src/views/WishList.vue -->

<!-- eslint-disable -->
<template>
  <div class="preferiti">
    <h1>I tuoi prodotti preferiti</h1>
    <div v-if="$store.state.favourites && $store.state.favourites.length > 0">
      <ul class="preferiti-list">
        <li
          v-for="(item, index) in $store.state.favourites"
          :key="index"
          class="preferiti-item"
        >
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
.preferiti-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.preferiti-item {
  display: inline-block; /* Assicura che ogni elemento della lista sia trattato come un blocco inline */
  background-color: #333;
  color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  width: 100%; /* Assicura che l'elemento si estenda su tutta la larghezza disponibile */
  max-width: 400px; /* Imposta una larghezza massima per un aspetto più equilibrato */
}
</style>
