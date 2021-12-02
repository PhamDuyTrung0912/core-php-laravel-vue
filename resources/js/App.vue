<template>
    <v-app app>
        <app-bar v-if="checkRoute($route.name)" />
        <router-view class="content" />
        <bottom-bar v-if="checkRoute($route.name)" />
    </v-app>
</template>

<script>
import apiServices from "./axios/index";

const AppBar = () => import("./components/AppBar.vue");
const BottomBar = () => import("./components/BottomBar.vue");

export default {
    components: {
        AppBar,
        BottomBar,
    },
    data() {
        return {};
    },

    methods: {
        checkRoute(route) {
            if (route) {
                if (route == "login" || route == "errorPage") return false;
                return true;
            }
            return false;
        },
    },
};
</script>

<style scoped>
.v-application {
    font-family: "Cairo", sans-serif !important;
}
.v-application .title {
    font-family: "Cairo", sans-serif !important;
}

.content {
    margin-top: 50px;
    margin-bottom: 55px;
}
</style>>