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
        <!-- Overlay -->
        <div class="overlay p-4 text-center text-white">
            <h5 class="text-uppercase fs-5 fw-bold"> {{ singleCard.name }} </h5>
            <p v-if="singleCard.type">
                <span class="fw-bold">type:</span>{{ singleCard.type }}
            </p>
            <p v-if="singleCard.level">
                <span class="fw-bold">level:</span>{{ singleCard.level }}
            </p>
            <p v-if="singleCard.race">
                <span class="fw-bold">race:</span>{{ singleCard.race }}
            </p>
            <p v-if="singleCard.archetype">
                <span class="fw-bold">archetype:</span>{{ singleCard.archetype }}
            </p>
            <p v-if="singleCard.desc">
                <span class="fw-bold">desc:</span>{{ singleCard.desc }}
            </p>
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

    &:hover .overlay {
        opacity: 1;
    }
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
    overflow-y: auto;

    p {
        padding: 0;
        margin: 0;
    }
}
</style>
