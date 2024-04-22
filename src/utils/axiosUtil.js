import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://tuapi.eees.cc/api.php",
});

export const get = async (url, params) => {
    return await axiosInstance.get(url, {params});
}
export const post = async (url, data) => {
    return await axiosInstance.post(url, data);
}
export const put = async (url, data) => {
    return await axiosInstance.put(url, data);
}
export const del = async (url) => {
    return await axiosInstance.delete(url);
}