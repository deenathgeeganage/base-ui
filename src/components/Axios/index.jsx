import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1";

export default axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
