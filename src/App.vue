<template>
  <div class="">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Carrello">Carrello</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/preferiti">Preferiti</router-link>|
    </nav>
    <div id="app">
      <router-view @add-to-cart="addToCart" :cart="cart" />
      <router-link v-if="$route.path !== '/Carrello'" to="/carrello"
        >Vai al Carrello</router-link
      >
    </div>
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
  font-family: "Lexend Mega", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
  font-family: "LexendMega", sans-serif;
}

.router-view {
  flex: 1;
}

nav {
  padding: 30px;
  margin-bottom: 30px;
}

nav a {
  font-weight: bold;
  color: white !important;
  text-decoration: none !important;
}
.carrello-link {
  color: white;
  font-weight: bold !important;
  text-decoration: none !important;
}

.carrello-link:hover {
  color: #42b983 !important;
}

.carrello-link:visited,
.carrello-link:link {
  color: white !important;
  text-decoration: none !important;
}

.carrello-link:focus,
.carrello-link:active {
  color: white;
  outline: none;
  text-decoration: none;
}

h1 {
  color: white !important;
  font-family: "Lobster", sans-serif !important;
  font-weight: 400 !important;
  font-style: normal !important;
}

h2,
h3,
p,
a {
  color: white !important;
}
</style>
