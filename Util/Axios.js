import * as coreAxios from "axios";
import {ADMIN_API_URL} from "../Config";


const axios = coreAxios.default.create({
  baseURL: ADMIN_API_URL,
});

//no toast
export const Axios = coreAxios.default.create({
  baseURL: ADMIN_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
//no toast
export const axiosNT = coreAxios.default.create({
  baseURL: ADMIN_API_URL,
});

//no global loader
export const axiosNL = coreAxios.default.create({
  baseURL: ADMIN_API_URL,
});

//no global loader and toast
export const axiosNTL = coreAxios.default.create({
  baseURL: ADMIN_API_URL,
});

export default axios;
