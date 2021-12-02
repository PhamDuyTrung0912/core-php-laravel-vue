<template>
    <v-sheet
        class="custom-app-bar d-flex justify-space-between"
        height="50"
        width="100%"
        elevation="0"
        color="primary"
    >
        <div class="d-flex align-center mx-2">
            <v-avatar color="white" size="35">
                <span class="primary--text text-body-2">TP</span>
            </v-avatar>
        </div>
        <div class="d-flex align-center mx-2">
            <v-btn @click="handleCLickLogout" fab height="35" width="35"
                ><v-icon color="primary"> mdi-logout </v-icon></v-btn
            >
        </div>
    </v-sheet>
</template>

<script>
export default {
    methods: {
        handleCLickLogout() {
            console.log("log-out");
            this.$router.push({name:'login'});
        },
    },
};
</script>

<style scoped>
.custom-app-bar {
    position: fixed;
    top: 0;
    left: 0;
}
</style>