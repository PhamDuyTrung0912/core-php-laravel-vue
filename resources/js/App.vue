<template>
    <v-app app>
        <v-container>
            <v-row>
                <v-col cols="4">
                    <v-card class="pa-3">
                        <line-chart
                            :height="250"
                            :data="chartData"
                            :options="chartOptions"
                        ></line-chart>
                    </v-card>
                </v-col>
                <v-col cols="8">
                    <v-card class="mx-auto">
                        <v-list subheader two-line>
                            <v-list-item
                                v-for="(file, index) in articles"
                                :key="index"
                            >
                                <v-list-item-avatar>
                                    <v-icon class="blue" dark
                                        >mdi-clipboard-text</v-icon
                                    >
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="file.title"
                                    ></v-list-item-title>

                                    <v-list-item-subtitle
                                        v-text="file.description"
                                    ></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn icon>
                                        <v-icon color="grey lighten-1"
                                            >mdi-information</v-icon
                                        >
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-card>
                    <v-card class="pa-4">
                        <v-file-input
                            v-model="upload"
                            show-size
                            label="File input"
                            prepend-icon="mdi-camera"
                        ></v-file-input>
                        <v-btn @click="hanldeClickUpload" color="primary"
                            >Submit</v-btn
                        >
                    </v-card>
                </v-col>
            </v-row>
            <v-card>
                <v-btn @click="handleAddArticle" color="primary"
                    >Add Article</v-btn
                >
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
import apiServices from "./axios/index";
import LineChart from "./components/LineChart";
export default {
    components: { LineChart },
    data() {
        return {
            upload: null,

            files: [
                {
                    color: "blue",
                    icon: "mdi-clipboard-text",
                    subtitle: "Jan 20, 2014",
                    title: "Vacation itinerary",
                },
                {
                    color: "amber",
                    icon: "mdi-gesture-tap-button",
                    subtitle: "Jan 10, 2014",
                    title: "Kitchen remodel",
                },
            ],

            articles: [],
            datacollection: null,

            chartOptions: {
                hoverBorderWidth: 20,
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Green", "Red", "Blue"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        data: [1, 10, 5],
                    },
                ],
            },
        };
    },

    methods: {
        handleAddArticle() {
            const data = {
                title: "them moi 1",
                description: "mo ta 1",
            };
            apiServices
                .addArticle(data)
                .then((res) => {
                    console.log("res-add", res.data);
                })
                .catch();
        },
        hanldeClickUpload() {
            console.log("Submit", this.upload);

            const data = new FormData();

            data.append("attach", this.upload) || "";

            apiServices
                .uploadArticle(data)
                .then((res) => {
                    console.log("upload", res.data);
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
        Echo.channel("laravel_database_chatroom").listen(
            "MessagePosted",
            (data) => {
                console.log("data-realtime", data);
                this.articles.push(data.article);
            }
        );
    },
};
</script>

<style>
</style>