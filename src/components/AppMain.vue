<script>
import AppGalleryCards from './AppGalleryCards.vue';
import { store } from '../data/store';

export default {
    data: () => store,
    components: { AppGalleryCards },
};
</script>

<template>
    <main>
        <!-- Container Cards -->
        <div class="container">
            <!-- Movies Card-->
            <AppGalleryCards :media="movies" section-id="movies" title="Movies" />
            <!-- Tv Shows Card-->
            <AppGalleryCards :media="tvShows" section-id="tv-series" title="TV Shows" />
        </div>
    </main>
</template>
  
<<<<<<< HEAD
<style lang="scss" scoped >
=======
<style lang="scss" scoped>
>>>>>>> 8ca5aace6fe89acaf062408dd355e9438d53fc8b
main {
    background-color: #383838;
    padding: 20px 0;
}
</style>
  
