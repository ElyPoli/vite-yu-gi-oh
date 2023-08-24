<script>
export default {

}
</script>

<template>
    <div class="container card-container pt-5 ps-5 pe-5 pb-2">
        <!-- Sezione carte trovate -->
        <div class="found-card">
            <p class="text-white m-0 p-0 fw-bold">Found 39 cards</p>
        </div>
        <div class="row row-cols-5 card-box gy-4">
            <div class="col">
                <div class="card">
                    <img src="/public/img/layout-da-riprodurre.png" alt="test">
                    <div class="card-body">
                        <h5 class="text-white text-uppercase fs-5 fw-bold">Card title</h5>
                        <p class="card-text">tipo</p>
                    </div>
                </div>
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

.card-box {
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
}

.found-card {
    background-color: $secondary-color;
    padding: 1rem;
}
</style>
