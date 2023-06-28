import axios from "axios";
import { PrductType } from "./types";

export let url = 'https://testbackend.nc-one.com';

axios.interceptors.response.use(
    config => {
        return config;
    },
    error => {
        console.log(error.response);
        return error;
    },
);

let requests = {
    allProducts: () => axios.get<PrductType[]>(url + '/image'),
    productDetail: (id: number) => axios.get<PrductType>(url + '/image?id=' + id),
}

export default requests;