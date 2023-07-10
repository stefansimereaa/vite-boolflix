<script>
import AppSearchBar from '../components/AppSearchBar.vue';
import { store } from '../data/Store';

export default {
    components: { AppSearchBar },
    methods: {
        inputSubmitForm(inputWord) {
            store.word = inputWord;
            this.$emit('submitted-word', inputWord);
        },
    },
    emits: ['submitted-word'],
};
</script>

<template>
    <AppSearchBar @submitted="inputSubmitForm" />
</template>

<style></style>
