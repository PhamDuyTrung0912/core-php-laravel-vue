<template>
    <div>
        <v-card-title class="pa-1 px-3">Add Payment</v-card-title>
        <v-card flat class="pa-3">
            <v-form ref="form" v-model="valid">
                <v-text-field
                    dense
                    label="Name payment"
                    outlined
                    clearable
                    v-model="formOrder.name"
                    :rules="rule.nameRules"
                ></v-text-field>
                <v-textarea
                    dense
                    label="Description payement"
                    outlined
                    clearable
                    v-model="formOrder.description"
                    hide-details
                ></v-textarea>
                <div class="d-flex align-center justify-center my-4">
                    <v-autocomplete
                        multiple
                        dense
                        label="Select Person"
                        outlined
                        :items="itemsPerson"
                        item-text="name"
                        item-value="id"
                        clearable
                        v-model="formOrder.people"
                        hide-details
                    ></v-autocomplete>
                    <v-btn @click="handleClickAdvange" icon
                        ><v-icon>{{
                            isAdvange ? "mdi-chevron-up" : "mdi-chevron-down"
                        }}</v-icon></v-btn
                    >
                </div>

                <v-card
                    elevation="3"
                    v-if="isAdvange && formOrder.people.length > 0"
                    class="mb-4 pa-2"
                >
                    <div v-for="(item, index) in formOrder.people" :key="index">
                        <v-card-text class="px-2 py-0 accent--text">{{
                            getNameByIdPeople(item)
                        }}</v-card-text>
                        <div class="px-2 py-1">
                            <text-money
                                v-model="sharePeople[index].amount"
                                :label="'Amount of money'"
                                :dense="true"
                                :outlined="true"
                                :clearable="true"
                                :rules="rule.amountRules"
                                :options="options"
                            />
                        </div>
                    </div>
                </v-card>

                <text-money
                    v-if="!isAdvange"
                    v-model="formOrder.money"
                    :label="'Amount of money'"
                    :dense="true"
                    :outlined="true"
                    :clearable="true"
                    :options="options"
                    :rules="rule.amountRules"
                />

                <div>
                    <v-btn @click="handleClickSubmit" color="primary"
                        >Submit</v-btn
                    >
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import TextMoney from "../components/textField/TextMoney.vue";
export default {
    name: "aboutPage",
    components: {
        TextMoney,
    },
    data() {
        return {
            valid: true,
            formOrder: {
                money: null,
                people: [],
                name: null,
                description: null,
            },

            sharePeople: [],

            isAdvange: false,

            options: {
                locale: "pt-BR",
                prefix: "",
                suffix: "",
                length: 9,
                precision: 0,
            },

            itemsPerson: [
                {
                    id: 1,
                    name: "Hoang Duong",
                },
                {
                    id: 2,
                    name: "Sy Bui",
                },
                {
                    id: 3,
                    name: "Tien",
                },
            ],

            rule: {
                nameRules: [(v) => !!v || "Reqired name !"],
                amountRules: [(v) => !!v || "Reqired amount !"],
            },
        };
    },
    methods: {
        handleClickSubmit() {
            if (this.$refs.form.validate()) {
                const objectSend = {
                    name: this.formOrder.name,
                    description: this.formOrder.description,
                    people: this.formOrder.people,
                    money: this.sharePeople,
                };
                console.log("objectSend", objectSend);
            }
        },
        handleClickAdvange() {
            this.isAdvange = !this.isAdvange;
        },
        getNameByIdPeople(id) {
            return this.itemsPerson.find((item) => item.id === id).name;
        },
    },
    watch: {
        "formOrder.people": {
            immediate: false,
            handler(val) {
                this.sharePeople = val.map((item) => {
                    return {
                        id: item,
                        amount: null,
                    };
                });
            },
        },
    },
};
</script>

<style>
</style>