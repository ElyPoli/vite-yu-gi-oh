<script>
import axios from 'axios';
import SingleCardGame from "./SingleCardGame.vue";
import { listOfCards } from "../card-list-create.js";

export default {
    components: {
        SingleCardGame,
    },
    data() {
        return {
            listOfCards,
            totalCard: "",
        }
    },
    methods: {
        /**
         * Ottiene una lista di carte dalla API e aggiorna la variabile 'cardsList'
         */
        findCard() {
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0";

            axios.get(url).then((response) => {
                listOfCards.cardsList = response.data.data;
            })
        },
    },
    mounted() {
        this.findCard();
    }
}
</script>

<template>
    
    <div class="container card-container pt-5 ps-5 pe-5 pb-2">
        <!-- Sezione carte trovate -->
        <div class="found-card">
            <p class="text-white m-0 p-0 fw-bold">Found {{ listOfCards.cardListSpecificType.length }} cards</p>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 card-box gy-4">
            <div class="col" v-for="card in listOfCards.cardListSpecificType">
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

.found-card {
    background-color: $secondary-color;
    padding: 1rem;
}
</style>
