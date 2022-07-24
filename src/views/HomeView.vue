<template>
  <div>
    <SearchBar/>
    <MovieCard/>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import MovieCard from '@/components/MovieCard.vue';
  export default {
    name: "Home",
    components: { SearchBar, MovieCard }
}
</script>
