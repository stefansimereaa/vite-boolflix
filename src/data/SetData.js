import { store } from "./Store";

// Crea un array di oggetti di film tramite il metodo map e lo invia allo store.js

export const setMoviesData = (movies) => {
  store.movies = movies.map(
    ({
      // Parametri richiesti
      id,
      title,
      original_title,
      original_language,
      vote_average,
      overview,
      poster_path,
    }) => {
      const img = `https://image.tmdb.org/t/p/w342${poster_path}`;
      const vote = Math.ceil(vote_average / 2);
      return {
        id,
        title,
        originalTitle: original_title,
        originalLanguage: original_language,
        vote,
        overview,
        img,
      };
    }
  );
};

// Crea un array di oggetti delle serie tv tramite il metodo map e lo invia allo store.js
export const setTvShowsData = (tvShows) => {
  store.tvShows = tvShows.map(
    ({
      // Parametri richiesti
      id,
      name,
      original_name,
      original_language,
      vote_average,
      overview,
      poster_path,
    }) => {
      const img = `https://image.tmdb.org/t/p/w342${poster_path}`;
      const vote = Math.ceil(vote_average / 2);
      return {
        id: id,
        title: name,
        originalTitle: original_name,
        originalLanguage: original_language,
        vote,
        overview,
        img,
      };
    }
  );
};
