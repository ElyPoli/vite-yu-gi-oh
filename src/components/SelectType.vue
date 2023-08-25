<script>
import { listOfCards } from "../card-list-create.js";

export default {
    data() {
        return {
            listOfCards,
        }
    },
    methods: {
        /**
         * Filtra le carte in base all'archetipo selezionato.
         */
        typeSelected() {
            listOfCards.cardListSpecificType = [];

            listOfCards.cardsList.forEach((singleCard, i) => {
                if (singleCard.archetype === listOfCards.type) {
                    listOfCards.cardListSpecificType[i] = singleCard;
                    console.log(listOfCards.cardListSpecificType[i]);
                }
            });
        },
    }
}
</script>

<template>
    <div class="container pt-4 pb-4">
        <!-- Form seleziona tipi -->
        <select class="form-select" v-model="listOfCards.type" @click="typeSelected()">
            <option selected value="Alien">Alien</option>
            <option value="Melodious">Melodious</option>
            <option value="Archfiend">Archfiend</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;
</style>
