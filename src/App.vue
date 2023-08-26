<script>
import TheHeader from "./components/TheHeader.vue";
import CardBox from "./components/CardBox.vue";
import SelectType from "./components/SelectType.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
    components: {
        TheHeader,
        CardBox,
        SelectType,
        TheFooter,
    }
}
</script>

<template>
    <TheHeader></TheHeader>
    <main>
        <SelectType></SelectType>
        <CardBox></CardBox>
    </main>
    <TheFooter></TheFooter>
</template>

<style lang="scss"></style>
