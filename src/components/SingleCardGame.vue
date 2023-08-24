<script>
export default {
    props: {
        singleCard: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div class="card">
        <img v-bind:src="singleCard.card_images[0].image_url" v-bind:alt="singleCard.name">
        <div class="card-body">
            <h5 class="text-white text-uppercase fs-5 fw-bold"> {{ singleCard.name }} </h5>
            <p class="card-text"> {{ singleCard.archetype }} </p>
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

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
}
</style>
