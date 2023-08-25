<script>
import { store  } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- Sezione carte trovate -->
    <div class="found-card">
        <p class="text-white m-0 p-0 fw-bold">Found {{ store.cardListSpecificType.length }} cards</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.found-card {
    background-color: $secondary-color;
    padding: 1rem;
}
</style>
