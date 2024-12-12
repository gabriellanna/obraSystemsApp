import axios from "axios";

import { responseInterceptor } from "./interceptors/ResponseInterceptor";
// import { errorInterceptor } from "./interceptors/ErrorInterceptor";
import { Environment } from "../../../environment";
import { StorageService } from "../../storage/storageService";
import { requestInterceptor } from "./interceptors/RequestIterceptor";

const Api = axios.create({
  baseURL: Environment.URL_BASE,
  headers: {
    Authorization: `Bearer ${(new StorageService().getToken())}`
  }
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  // (error) => errorInterceptor(error)
);

Api.interceptors.request.use(
  (request) => requestInterceptor(request)
);

export { Api };
