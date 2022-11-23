<template>
    <div>
        <AppMenu />
        <div class="container my-4">
            <AppHome />
        </div>
    </div>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import AppHome from "./components/pages/AppHome.vue";

export default {
    name: "App",
    components: {
        AppMenu,
        AppHome,
    },
};
</script>

<style>
</style>
