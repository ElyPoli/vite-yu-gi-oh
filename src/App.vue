<script>
import TheHeader from "./components/TheHeader.vue";
import CardBox from "./components/CardBox.vue";

export default {
    components: {
        TheHeader,
        CardBox,
    }
}
</script>

<template>
    <TheHeader></TheHeader>
    <main>
        <div class="container pt-4 pb-4">
            <!-- Form seleziona opzioni -->
            <select class="form-select">
                <option value="1">Alien</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <CardBox></CardBox>
    </main>
</template>

<style lang="scss"></style>
