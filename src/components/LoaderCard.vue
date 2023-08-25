<script>
export default {

};
</script>

<template>
    <div class="my-loader">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.my-loader {
    @include box-center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $secondary-color;

    div {
        color: $primary-color;
    }
}
</style>