<template>
    <div>
        <AppMenu />
        <div class="container my-4">
            <WorkshopsList />
        </div>
    </div>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
// import AppHome from "./components/pages/AppHome.vue";
import WorkshopsList from "./components/pages/WorkshopsList/WorkshopsList.vue";

export default {
    name: "App",
    components: {
        AppMenu,
        // AppHome,
        WorkshopsList
    },
};
</script>

<style>
</style>
