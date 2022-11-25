<template>
    <div class="container my-4">
        <h1>List of workshops</h1>
        <hr />
        <div class="d-flex justify-content-center" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error.message }}
        </div>
        <div class="row" v-if="!loading && !error && workshops.length !== 0">
            <div
                class="col-12 col-sm-6 col-lg-4 d-flex"
                v-for="workshop in workshops"
                :key="workshop.id"
            >
                <!-- :to="'/workshops/' + workshop.id" -->
                <router-link
                    :to="{ name: 'sessions-list', params: { id: workshop.id } }"
                    class="text-reset text-decoration-none d-flex w-100"
                >
                    <WorkshopsListItem :workshop="workshop" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// @ -> src folder
import { getWorkshops } from '@/services/workshops';
import WorkshopsListItem from './WorkshopsListItem.vue';

export default {
    name: "WorkshopsList",
    components: {
        WorkshopsListItem
    },
    data() {
        return {
            workshops: [],
            loading: false,
            error: null,
        };
    },
    // "lifecycle methods" -> this is called when the component shows up for the first time and the DOM is ready
    async mounted() {
        this.loading = true;

        try {
            const workshops = await getWorkshops();
            this.workshops = workshops;
        } catch (error) {
            this.error = error;
        } finally {
            this.loading = false;
        }
    },
};
</script>

<style>
</style>