import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import "vuetify/dist/vuetify.min.css";

export default new Vuetify({
    icons: {
        iconfont: "md", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        options: { customProperties: true },
        themes: {
            light: {
                primary: "#3C8DBC",
                secondary: "#2196f3",
                tertiary: "#FFFFFF",
                accent: "#3C8DBC",
                error: "#f44336",
                warning: "#FFB300", // amber darken-1
                info: "#80DEEA", // cyan lighten-3
                success: "#4caf50",
                tabColor: "#FDECCD",
                gray: "#aaa",
            },
            dark: {
                primary: "#0097A7", // cyan darken-2
                secondary: "#2196f3",
                tertiary: "tertiary",
                accent: "#3C8DBC",
                error: "#f44336",
                warning: "#FFB300", // amber darken-1
                info: "#80DEEA", // cyan lighten-3
                success: "#4caf50",
                tabColor: "#FDECCD",
                gray: "#aaa",
            },
        },
    },
});
