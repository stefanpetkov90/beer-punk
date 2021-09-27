import axios from "axios";
import { GET_BEERS_SERVICE } from "./config";

export const api = {
  searchBeers: async function (searchString) {
    return axios.get(GET_BEERS_SERVICE, {
      params: { beer_name: searchString },
    });
  },
};
