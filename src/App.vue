<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Carrello">Carrello</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div id="app">
    <router-view @add-to-cart="addToCart" :cart="cart" />
    <router-link v-if="$route.path !== '/Carrello'" to="/carrello"
      >Vai al Carrello</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [], // Stato del carrello
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product); // Aggiungi il prodotto al carrello
      console.log(this.cart); // Controlla che il prodotto sia aggiunto correttamente
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
