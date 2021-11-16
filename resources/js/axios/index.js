import axios from "axios";

class APIService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.VUE_APP_API_URL,
        });
    }

    getArticles() {
        return this.axios.get("api/articles");
    }
}

export default new APIService();
