<template>
    <v-sheet
        class="custom-app-bar d-flex align-center"
        color="white"
        elevation="9"
        height="55"
        width="100%"
    >
        <v-row no-gutters>
            <v-col cols="4">
                <div class="d-flex flex-column align-center justify-center">
                    <div><v-icon color="primary">mdi-clipboard-outline</v-icon></div>
                    <div class="text-body-2 font-weight-bold primary--text">
                        Order
                    </div>
                </div>
            </v-col>
            <v-col cols="4">
                <div class="d-flex flex-column align-center justify-center">
                    <div><v-icon color="primary">mdi-home-outline</v-icon></div>
                    <div class="text-body-2 font-weight-bold primary--text">
                        Home
                    </div>
                </div>
            </v-col>
            <v-col cols="4">
                <div class="d-flex flex-column align-center justify-center">
                    <div><v-icon color="primary">mdi-chart-line</v-icon></div>
                    <div class="text-body-2 font-weight-bold primary--text">
                        Statistical
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {};
</script>

<style  scoped>
.custom-app-bar {
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>>
