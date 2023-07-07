import axios from "axios";
import { baseURL, API_KEY } from "./data";

// Creazione di un'istanza axios per effettuare richiesta API
export const axiosRequest = axios.create({
  baseURL,
  params: { language: "it-IT" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});
