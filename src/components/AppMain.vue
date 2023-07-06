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
        <div class="container">
            <AppGalleryCards :media="movies" section-id="movies" title="Movies" />
            <AppGalleryCards :media="tvShows" section-id="tv-series" title="TV Shows" />
        </div>
    </main>
</template>
  
<style lang="scss" scoped>
section {
    margin-bottom: 6rem;
}

main {
    background-color: #383838;
    padding: 15px 0;
}

.container .movies,
.series {
    display: flex;
    overflow-x: auto;
}

h2 {
    margin-left: 10px;
    padding-top: 20px;
    font-size: 15px;
    text-transform: uppercase;
    color: white;
}
</style>
  