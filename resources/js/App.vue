<template>
    <div>Hello world</div>
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