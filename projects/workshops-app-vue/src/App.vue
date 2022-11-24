<template>
    <div>
        <AppMenu />
        <b-container class="my-4">
            <!-- <AppHome /> -->
            <!-- <WorkshopsList /> -->
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
// import AppHome from "./components/pages/AppHome.vue";
// import WorkshopsList from "./components/pages/WorkshopsList/WorkshopsList.vue";

export default {
    name: "App",
    components: {
        AppMenu,
        // AppHome,
        // WorkshopsList
    },
};
</script>

<style>
</style>
