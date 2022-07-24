import axios from "axios";

const URL = "http://www.omdbapi.com/";
const key = {
  apikey: "a44cbacc",
};

const RequestHelper = async (payload) =>
  await axios.get(URL, { params: { ...payload, ...key } });

const state = {
  movies: [],
  movieDetails: {},
};

const getters = {
  allMovies: (state) => state.movies,
  movieDetails: (state) => state.movieDetails,
};

const mutations = {
  setMovies: (state, payload) => (state.movies = payload),
  setMovieDetails: (state, payload) => (state.movieDetails = payload),
};

const actions = {
  async getMovies({ commit }, payload) {
    const { data } = await RequestHelper(payload);
    commit("setMovies", data);
  },
  async getMovieDetails({ commit }, payload) {
    const { data } = await RequestHelper(payload);
    commit("setMovieDetails", data);
  },
  clearMovieDetails({ commit }) {
    commit("setMovieDetails", {});
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
