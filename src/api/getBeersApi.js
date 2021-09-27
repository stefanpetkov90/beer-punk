import axios from "axios";
import { GET_BEERS_SERVICE } from "./config";

export const api = {
  getBeers: async function () {
    return axios.get(GET_BEERS_SERVICE, {});
  },
};
