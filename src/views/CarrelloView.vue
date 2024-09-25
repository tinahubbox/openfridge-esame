<template>
  <div>
    <h1>Il tuo carrello</h1>
    <div v-if="cart && cart.length > 0">
      <ul class="cart-list">
        <li
          v-for="(item, index) in $store.state.cart"
          :key="index"
          class="cart-item d-flex justify-content-between align-items-center"
        >
          {{ item[0].name }} - €{{ item[1] }}
          <button
            @click="removeFromCart(index)"
            class="btn btn-danger btn-sm remove-btn"
          >
            Rimuovi
          </button>
        </li>
      </ul>
      <p class="total-amount">Totale: €{{ total }}</p>
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
h1 {
  color: white;
  margin-bottom: 20px;
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  background-color: #333;
  color: white;
  padding: 10px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-details {
  flex: 1;
  margin-right: 10px;
}

.remove-btn {
  background-color: white;
  border: none;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #ff3333;
}

.total-amount {
  color: white;
  font-weight: bold;
  margin-top: 20px;
}
</style>
