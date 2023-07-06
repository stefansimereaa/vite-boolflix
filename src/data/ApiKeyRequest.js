import axios from "axios";
import { baseURL, API_KEY } from "../data/Data";

export const axiosRequest = axios.create({
  baseURL,
  params: { language: "it-IT" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});
