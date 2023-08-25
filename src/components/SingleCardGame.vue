<script>
export default {
    props: {
        singleCard: {
            type: Object,
            default: null,
            required: true,
        }
    }
}
</script>

<template>
    <div class="card">
        <img v-bind:src="singleCard.card_images[0].image_url" v-bind:alt="singleCard.name" v-if="singleCard">
        <img src="/public/img/logo-Yu-Gi-Oh.png" alt="image default" v-else>
        <div class="card-body">
            <h5 class="text-white text-uppercase fs-5 fw-bold" v-if="singleCard"> {{ singleCard.name }} </h5>
            <h5 class="text-white text-uppercase fs-5 fw-bold" v-else>Yu-Gi-Oh</h5>
            <p class="card-text" v-if="singleCard"> {{ singleCard.archetype }} </p>
            <p class="card-text"  v-else> Yu-Gi-Oh </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.card {
    cursor: pointer;
    height: 100%;
    color: var(--bs-body-color);
    background-color: $primary-color;
    border: none;
    border-radius: 0;
    min-height: 412px;

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
}
</style>
