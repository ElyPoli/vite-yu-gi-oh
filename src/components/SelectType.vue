<script>
import { store, selectOption, typeSelected } from "../store";

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        typeSelected,
    },
    mounted() {
        selectOption();
    }
}
</script>

<template>
    <div class="container pt-4 pb-4">
        <!-- Form seleziona tipi -->
        <select class="form-select" v-model="store.type" @change="typeSelected()">
            <option selected>Select archetype</option>
            <option v-bind:value="option.archetype_name" v-for="option in store.listOptionSelect"> {{
                option.archetype_name }} </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;
</style>
