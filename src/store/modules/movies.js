import MovieAPI from '@/api/movies';

const state = {
  movies: [],
  movieDetails: {},
  loadingMovieDetails: false,
};

const getters = {
  allMovies: (state) => state.movies,
  movieDetails: (state) => state.movieDetails,
  loadingMovieDetails: (state) => state.loadingMovieDetails,
};

const mutations = {
  SET_MOVIES: (state, payload) => (state.movies = payload),
  SET_MOVIE_DETAILS: (state, payload) => (state.movieDetails = payload),
  SET_LOADING_MOVIEDETAILS: (state, payload) =>
    (state.loadingMovieDetails = payload),
};

const actions = {
  async getMovies({ commit }, payload) {
    const { data } = await MovieAPI.get(payload);
    commit("SET_MOVIES", data);
  },

  async getMovieDetails({ commit }, payload) {
    const { data } = await MovieAPI.get(payload);
    commit("SET_MOVIE_DETAILS", data);
  },

  clearMovieDetails({ commit }) {
    commit("SET_MOVIE_DETAILS", {});
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
