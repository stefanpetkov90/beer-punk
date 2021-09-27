import axios from "axios";
import { GET_RANDOM_BEER_SERVICE } from "./config";

export const api = {
  getRandomBeer: async function () {
    return axios.get(GET_RANDOM_BEER_SERVICE, {});
  },
};
