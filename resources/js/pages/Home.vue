<template>
    <div>
        <!-- <div class="pa-2">
            <date-picker
                :dense="true"
                v-model="date_picker"
                :hideDetails="true"
                :className="'pa-0 ma-0'"
                :outlined="true"
                :label="'Select Date'"
            />
        </div> -->

        <v-card elevation="1" class="ma-2 pa-1">
            <v-card-title class="text-body-1 pa-1 text-capitalize"
                >Detail</v-card-title
            >
            <v-divider></v-divider>
            <div class="d-flex justify-space-between">
                <v-card-text class="text-capitalize">Pham Trung</v-card-text>
                <v-card-text class="d-flex justify-end success--text"
                    >$100</v-card-text
                >
            </div>
            <v-divider></v-divider>
            <div class="d-flex justify-space-between">
                <v-card-text class="text-capitalize">Hoang Duong</v-card-text>
                <v-card-text class="d-flex justify-end error--text"
                    >- $50</v-card-text
                >
            </div>
            <v-divider></v-divider>
            <div class="d-flex justify-space-between">
                <v-card-text class="text-capitalize">Pham Trung</v-card-text>
                <v-card-text class="d-flex justify-end success--text"
                    >$100</v-card-text
                >
            </div>
        </v-card>

        <v-card elevation="1" class="ma-2 pa-1">
            <div class="d-flex justify-space-between">
                <v-card-text class="text-capitalize">Total</v-card-text>
                <v-card-text class="d-flex justify-end success--text"
                    >$100</v-card-text
                >
            </div>
        </v-card>
    </div>
</template>

<script>
import DatePicker from "../components/pickers/DatePicker.vue";
export default {
    name: "homePage",
    components: {
        DatePicker,
    },
    data() {
        return {
            date_picker: null,
        };
    },
    created() {
        this.date_picker = new Date();
    },
};
</script>

<style>
</style>