import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarrelloView from "../views/CarrelloView.vue";
import WishList from "../views/WishList.vue";
import ProductDetail from "../views/ProductDetail.vue"; // Importa il componente del dettaglio

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/Carrello",
    name: "Carrello",
    component: CarrelloView,
  },
  {
    path: "/preferiti",
    name: "preferiti",
    component: WishList,
  },
  {
    path: "/product/:id", // Route dinamica per il dettaglio prodotto
    name: "ProductDetail",
    component: ProductDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
