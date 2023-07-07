<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { setMoviesData, setTvShowsData } from './data/setData';
import { axiosRequest } from './data/ApiKeyRequest';

// Funzione asincrona per ottenere i risultati della ricerca
const fetchResults = async (whatToFetch, query) => {
  const params = { query };
  const res = await axiosRequest.get(whatToFetch, { params });
  return res.data.results;
};

export default {
  components: { AppHeader, AppMain },
  methods: {
    async inputNewWord(query) {
      // Ottenere i risultati delle film corrispondenti alla query
      const movies = await fetchResults('/movie', query);
      // Ottenere i risultati delle serie TV corrispondenti alla query
      const tvShows = await fetchResults('/tv', query);

      setMoviesData(movies);
      setTvShowsData(tvShows);
    },
  },
};
</script>

<template>
  <!-- AppHeader emette l'evento "submitted-word" quando viene inviata una parola -->
  <AppHeader @submitted-word="inputNewWord" />
  <AppMain />
</template>

<style lang="scss" scoped>
// Importato foglio di stile
@import '../src/assets/scss/style.scss';
</style>
