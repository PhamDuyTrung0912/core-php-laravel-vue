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
    addArticle(data){
        return this.axios.post("api/articles",data);
    }

    uploadArticle(data){
        return this.axios.post("api/articles/upload",data);
    }
}

export default new APIService();
