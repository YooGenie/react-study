import axios from "axios";
import {Config}  from "../config/Config";

const API_URL = Config.API_SERVER();

class ApiService {
        getPdf(id) {
        return axios.get(`${API_URL}/pdf/${id}`, {
            loading: true,
            headers: {  'Content-Type': 'application/pdf'},
            responseType: "blob",
        })
    };
}

const instance = new ApiService();
export { instance as ApiService };