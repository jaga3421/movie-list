<template>
  <v-container v-if="allMovies">
    <div v-if="allMovies.Error" class="pa-2 red lighten-4">
      {{ allMovies.Error }}
    </div>

    <div v-else>
      <v-row v-if="allMovies.totalResults">
        <v-col cols="12">
          <div class="total-results caption success--text text-right">
            Total results: {{ allMovies.totalResults }}
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="3"
          v-for="movie in allMovies.Search"
          :key="movie.imdbID"
        >
          <div class="movie-card d-flex rounded-lg">
            <img
              role="button"
              :src="movie.Poster"
              width="100px"
              @click="openOverlay(movie.imdbID)"
            />

            <div class="movie-details d-flex flex-column px-2 body-2 py-4">
              <div class="just-details mb-2">
                <div class="font-weight-bold">{{ movie.Title }}</div>
                <div>{{ movie.Year }}</div>
                <v-chip class="my-2" x-small>
                  {{ movie.Type }}
                </v-chip>
              </div>

              <div class="bottom-cta d-flex mt-auto">
                <v-btn x-small text class="primary lighten-3 mr-1">
                  <v-icon small>mdi-wikipedia</v-icon>
                </v-btn>
                <v-btn x-small text class="primary lighten-3 mr-1" :to="`movie/${movie.imdbID}`">
                  More Details
                </v-btn>
                <v-btn x-small text rounded class="ms-auto">
                  <v-icon x-small>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      overlay: {},
    };
  },
  computed: {
    ...mapGetters(["allMovies"]),
  },
  methods: {
    openOverlay(id) {
      this.overlay[id] = true;
    },
  },
};
</script>

<style lang="scss">
.movie-card {
  overflow: hidden;
  border: 1px solid #e4e4e4;
  position: relative;
  min-height: 160px;
  .movie-details {
    flex: 1;
  }
}
</style>
