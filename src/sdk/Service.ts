import axios, { AxiosResponse } from "axios";

const Http = axios.create();

export class Service {
    protected static Http = Http;
    protected static getData = <T>(res: AxiosResponse<T>) => res.data;
}

Http.defaults.baseURL = "http://localhost:8080";