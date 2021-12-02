import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../pages/Home.vue");
const Order = () => import("../pages/Order.vue");
const Static = () => import("../pages/Static.vue");
const Login = () => import("../pages/Login.vue");
const ErrorPage = () => import("../pages/ErrorPage.vue");

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

    {
        path: "/login",
        name: "login",
        component: Login,
    },

    //Not Found Route
    {
        path: "*",
        component: ErrorPage,
        name: "errorPage",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
