<template>
  <v-container>
    <v-form ref="form" @submit.prevent="searchMovies">
      <v-row justify="space-between">
        <v-col cols="12">
          <v-text-field
            v-model="searchKey"
            label="What do you wanna watch?"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      searchKey: "",
    };
  },
  computed: {
    ...mapGetters(["allMovies"]),
  },
  methods: {
    ...mapActions(["getMovies"]),
    searchMovies() {
      console.log(this.searchKey);
      this.getMovies({ s: this.searchKey });
    },
  },
};
</script>

<style></style>
