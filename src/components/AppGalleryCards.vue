<script>
import AppMoviesCard from '../components/AppMoviesCard.vue';

export default {
    props: {
        sectionId: String,
        title: String,
        media: Array,
    },
    components: { AppMoviesCard },
};
</script>

<template>
    <!-- Section Gallery -->
    <section :id="sectionId">
        <div class="sections-title">
            <h2>{{ title }}</h2>
        </div>
        <div class="flex-container">
            <AppMoviesCard v-for="m in media" :key="m.id" v-bind="m" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
}

h2 {
    color: white;
    font-size: 35px;
    text-transform: uppercase;
}

.sections-title {
    border-bottom: 1px solid black;
    background-color: red;
    margin-bottom: 20px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
