<template>
    <v-app app>
        <v-alert border="top" color="red lighten-2" dark>
            I'm an alert with a top border and red color
        </v-alert>
    </v-app>
</template>

<script>
import apiServices from "./axios/index";
export default {
    created() {
        apiServices
            .getArticles()
            .then((res) => {
                console.log("data-article", res.data);
            })
            .catch();
    },
};
</script>

<style>
</style>