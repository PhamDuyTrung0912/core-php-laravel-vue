<template>
    <v-container fluid class="custom-container-login">
        <v-card elevation="4" class="pa-4 rounded-xl" width="90%">
            <v-card-title class="px-0 font-weight-medium">LOGIN</v-card-title>
            <v-form v-model="valid" ref="form">
                <v-text-field
                    prepend-inner-icon="mdi-account"
                    label="Username"
                    dense
                    outlined
                    v-model="form.username"
                    :rules="rules.nameRules"
                ></v-text-field>
                <v-text-field
                    label="Password"
                    dense
                    outlined
                    type="password"
                    prepend-inner-icon="mdi-textbox-password"
                    v-model="form.password"
                    :rules="rules.passRules"
                ></v-text-field>
                <v-btn @click="hanldeSubmit" color="primary">Sign In</v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            form: {
                username: null,
                password: null,
            },

            rules: {
                nameRules: [(v) => !!v || "Required name !"],
                passRules: [(v) => !!v || "Requied password !"],
            },
        };
    },
    methods: {
        hanldeSubmit() {
            if (this.$refs.form.validate()) {
                console.log("form", this.form);
                this.$router.push({ name: "home" });
            }
        },
    },
};
</script>

<style scoped>
.custom-container-login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>