<script>
import AppSearchbar from '../components/AppSearchbar.vue';
import { store } from '../data/store';

export default {
    components: { AppSearchbar },
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
    <AppSearchbar @submitted="inputSubmitForm" />
</template>

<style></style>
