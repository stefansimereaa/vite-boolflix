<script>
import axios from 'axios';
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

const endpoint = ''


export default {
  data() {
    return {

    }
  },
  components: { AppHeader, AppMain, },


};
</script>

<template>
  <div class="container-background">
    <!-- Component App Header -->
    <AppHeader />
    <!-- Component App Main -->
    <AppMain />
  </div>
</template>

<style lang="scss" scoped>
@import '../src/assets/scss/style.scss';
</style>

