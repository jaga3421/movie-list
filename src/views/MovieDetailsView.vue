<template>
  <v-container>
    <div class="loading" v-if="loadingMovieDetails">loading</div>
    <v-row v-else>
      <v-img :src="movieDetails.Poster" />
      <v-col cols="12">
        <h1 class="my-2">{{ movieDetails.Title }}</h1>

        <p><b>Plot: </b>{{ movieDetails.Plot }}</p>

        <div class="genre">
          <v-chip
            x-small
            class="ms-1"
            v-for="(genre, i) in movieDetails.Genre?.split(',')"
            :key="i"
            >{{ genre }}</v-chip
          >
        </div>

        <div class="director mt-2">
          <span class="font-weight-bold body-1">Director: </span>
          <span class="body-1">{{ movieDetails.Director }}</span>
        </div>

        <div class="director mt-2">
          <span class="font-weight-bold body-1">Cast: </span>
          <span class="body-1">{{ movieDetails.Actors }}</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    const { id } = this.$route.params;
    this.getMovieDetails({
      i: id,
    });
  },
  beforeMount() {
    this.clearMovieDetails();
  },
  computed: {
    ...mapGetters(["movieDetails", "loadingMovieDetails"]),
  },
  methods: {
    ...mapActions(["getMovieDetails", "clearMovieDetails"]),
  },
};
</script>

<style></style>
