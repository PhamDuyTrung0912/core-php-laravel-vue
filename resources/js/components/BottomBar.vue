<template>
    <v-sheet
        class="custom-app-bar d-flex align-center"
        color="white"
        elevation="9"
        height="55"
        width="100%"
    >
        <v-row no-gutters class="menu-item">
            <v-col
                cols="4"
                :class="
                    $route.name === 'order'
                        ? 'd-flex align-center justify-center primary'
                        : 'd-flex align-center justify-center'
                "
            >
                <div
                    @click="redirectPage('order')"
                    class="d-flex flex-column align-center justify-center"
                >
                    <div>
                        <v-icon
                            :color="
                                $route.name === 'order' ? 'white' : 'primary'
                            "
                            >mdi-clipboard-outline</v-icon
                        >
                    </div>
                    <div
                        :class="
                            $route.name === 'order'
                                ? 'text-body-2 font-weight-bold white--text'
                                : 'text-body-2 font-weight-bold primary--text'
                        "
                    >
                        Order
                    </div>
                </div>
            </v-col>
            <v-col
                cols="4"
                :class="
                    $route.name === 'home'
                        ? 'd-flex align-center justify-center primary'
                        : 'd-flex align-center justify-center'
                "
            >
                <div
                    @click="redirectPage('home')"
                    class="d-flex flex-column align-center justify-center"
                >
                    <div>
                        <v-icon
                            :color="
                                $route.name === 'home' ? 'white' : 'primary'
                            "
                            >mdi-home-outline</v-icon
                        >
                    </div>
                    <div
                        :class="
                            $route.name === 'home'
                                ? 'text-body-2 font-weight-bold white--text'
                                : 'text-body-2 font-weight-bold primary--text'
                        "
                    >
                        Home
                    </div>
                </div>
            </v-col>
            <v-col
                cols="4"
                :class="
                    $route.name === 'static'
                        ? 'd-flex align-center justify-center primary'
                        : 'd-flex align-center justify-center'
                "
            >
                <div
                    @click="redirectPage('static')"
                    class="d-flex flex-column align-center justify-center"
                >
                    <div>
                        <v-icon
                            :color="
                                $route.name === 'static' ? 'white' : 'primary'
                            "
                            >mdi-chart-line</v-icon
                        >
                    </div>
                    <div
                        :class="
                            $route.name === 'static'
                                ? 'text-body-2 font-weight-bold white--text'
                                : 'text-body-2 font-weight-bold primary--text'
                        "
                    >
                        Statistical
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        redirectPage(name) {
            if (name !== this.$route.name) this.$router.push({ name });
        },
    },
};
</script>

<style  scoped>
.custom-app-bar {
    position: fixed;
    left: 0;
    bottom: 0;
}
.menu-item {
    height: 100%;
}
</style>>
