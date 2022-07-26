import axios from "axios";

const URL = "http://www.omdbapi.com/";
const key = {
  apikey: "a44cbacc",
};

// Api methods
const get = (payload) => axios.get(URL, { params: { ...payload, ...key } });

export default {
  get,
};
