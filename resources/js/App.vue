<template>
    <v-app app>
        <v-alert border="top" color="red lighten-2" dark>
            I'm an alert with a top border and red color
        </v-alert>
        <v-btn @click="handleSubmit" color="primary" class="white--text"
            >Submit</v-btn
        >

        <v-card class="mx-auto" tile>
            <v-list-item v-for="(item, index) in articles" :key="index">
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                        item.description
                    }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-app>
</template>

<script>
import apiServices from "./axios/index";
export default {
    data() {
        return {
            articles: [],
        };
    },
    methods: {
        handleSubmit() {
            console.log("Submit");
            const data = {
                title: "Title create new",
                description: "Desciption create new",
            };
            apiServices
                .addArticle(data)
                .then((res) => {
                    console.log("create-article", res.data);
                })
                .catch();
        },
    },
    created() {
        apiServices
            .getArticles()
            .then((res) => {
                console.log("data-article", res.data);
                this.articles = res.data;
            })
            .catch();
    },
};
</script>

<style>
</style>