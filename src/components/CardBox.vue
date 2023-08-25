<script>
import SingleCardGame from "./SingleCardGame.vue";
import NumberFoundCard from "./NumberFoundCard.vue";
import { store, findSelectedCards  } from "../store.js";

export default {
    components: {
        SingleCardGame,
        NumberFoundCard,
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        findSelectedCards();
    }
}
</script>

<template>
    <div class="container card-container pt-5 ps-5 pe-5 pb-2">
        <NumberFoundCard></NumberFoundCard>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 card-box gy-4">
            <div class="col" v-for="card in store.cardListSpecificType" :key="card.id">
                <SingleCardGame v-bind:singleCard="card"></SingleCardGame>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.card-container {
    background-color: #ffffff;
}
</style>
