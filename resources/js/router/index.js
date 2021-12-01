import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
