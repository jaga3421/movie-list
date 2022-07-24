<template>
  <v-app>
    <NavBar/>
    <v-content>
      <v-sheet  id="scrolling-2">
        <router-view/>
      </v-sheet>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { NavBar }
};
</script>
