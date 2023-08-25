<script>
import TheHeader from "./components/TheHeader.vue";
import CardBox from "./components/CardBox.vue";
import SelectType from "./components/SelectType.vue";

export default {
    components: {
        TheHeader,
        CardBox,
        SelectType,
    }
}
</script>

<template>
    <TheHeader></TheHeader>
    <main>
        <SelectType></SelectType>
        <CardBox></CardBox>
    </main>
</template>

<style lang="scss"></style>
