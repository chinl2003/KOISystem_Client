import axios from "axios";
import { getToken } from "../utils/auth";
import { SYS_API_URL } from "../constants/global";
import { toastError, toastWarning } from "@/utils/toast";
const apiClient =  axios.create({
    baseURL: SYS_API_URL,
});
const axiosPrivate = axios.create({
    baseURL: SYS_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosPrivate.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// Response interceptor for handling errors globally
const handleError = (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                toastWarning(error.response.data.errorMessage || 'Unauthorized. Please login.');
                break;
            case 403:
                toastWarning(error.response.data.errorMessage || 'Forbidden. You do not have permission to access this resource.');
                break;
            case 404:
                toastWarning(error.response.data.errorMessage || 'Resource not found.');
                break;
            case 400:
            toastWarning(error.response.data.errorMessage || 'An error occurred. Please try again later.');
            break;
            default:
                toastError(error.response.data.errorMessage || 'An error occurred. Please try again later.');
        }
    } else if (error.request) {
        console.log(error)
        toastError('No response received. Please check your network.');
    } else {
        toastError('Error: ' + error.message);
    }
    return Promise.reject(error);
};

apiClient.interceptors.response.use(response => response, handleError);
axiosPrivate.interceptors.response.use(response => response, handleError);

export {  apiClient ,axiosPrivate };