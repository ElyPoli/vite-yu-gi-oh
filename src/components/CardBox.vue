<script>
import SingleCardGame from "./SingleCardGame.vue";
import NumberFoundCard from "./NumberFoundCard.vue";
import LoaderCard from "./LoaderCard.vue";
import { store, findSelectedCards, updatePage } from "../store.js";

export default {
    components: {
        SingleCardGame,
        NumberFoundCard,
        LoaderCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        updatePage,
    },
    mounted() {
        findSelectedCards();
    }
}
</script>

<template>
    <div class="container card-container pt-5 ps-5 pe-5 pb-5">
        <NumberFoundCard></NumberFoundCard>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 card-box gy-4">
            <div class="col" v-for="card in store.cardListSpecificType" :key="card.id">
                <SingleCardGame v-bind:singleCard="card"></SingleCardGame>
            </div>
        </div>
        <div class="load-more pt-5" v-if='store.type === "Select archetype"'>
            <button type="button" class="btn my-btn-load text-uppercase" @click="updatePage()">
                load more
            </button>
        </div>
    </div>
    <LoaderCard v-if="store.isLoadPage"></LoaderCard>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.card-container {
    background-color: #ffffff;
}

.load-more {
    @include box-center;

    .my-btn-load {
        color: #ffffff;
        background-color: $primary-color;
        border: 2px solid $primary-color;
        border-radius: 0%;
        transition: transform .3s;
        font-weight: bold;
        font-size: .8rem;
    }

    .my-btn-load:hover {
        transform: scale(.97);
        color: #ffffff;
        background-color: $primary-color;
        border: 2px solid $primary-color;
    }
}
</style>
