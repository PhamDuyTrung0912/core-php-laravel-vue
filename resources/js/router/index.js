import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../pages/Home.vue");
const Order = () => import("../pages/Order.vue");
const Static = () => import("../pages/Static.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "order",
        component: Order,
    },
    {
        path: "/static",
        name: "static",
        component: Static,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
