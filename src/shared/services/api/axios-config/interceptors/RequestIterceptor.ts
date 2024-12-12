import { InternalAxiosRequestConfig } from "axios";
import { StorageService } from "../../../storage/storageService";

export const requestInterceptor = (request: InternalAxiosRequestConfig) => {
    const token = new StorageService().getToken();
    if (token != null)
        request.headers.Authorization = `Bearer ${token}`
    return request;
}