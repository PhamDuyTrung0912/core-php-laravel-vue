<template>
    <v-app app>
        <app-bar />
        <router-view class="content" />
        <bottom-bar />
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

    methods: {},
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
}
</style>>