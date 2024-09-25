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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.preferiti-item {
  display: inline-block;
  background-color: #333;
  color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}
@media (min-width: 576px) {
  .preferiti-item {
    width: calc(50% - 20px);
  }
}

@media (min-width: 768px) {
  .preferiti-item {
    width: calc(33.33% - 20px);
  }
}

@media (min-width: 992px) {
  .preferiti-item {
    width: calc(25% - 20px);
  }
}
</style>
