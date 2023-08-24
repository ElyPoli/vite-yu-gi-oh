<script>
export default {

}
</script>

<template>
    <header class="ps-5 pt-3 pb-3">
        <img src="/public/img/logo-Yu-Gi-Oh.png" alt="logo-Yu-Gi-Oh" class="pe-3">
        <h1 class="m-0 p-0 ps-3">Yu-Gi-Oh Api</h1>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header {
    @include box-left;
    
    img {
        cursor: pointer;
        max-width: 100px;
    }

    h1 {
        cursor: pointer;
        font-size: 3rem;
    }
}

</style>
