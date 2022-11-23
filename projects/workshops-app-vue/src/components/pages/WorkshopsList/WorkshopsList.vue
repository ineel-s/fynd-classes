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
                <div
                    class="
                        card
                        w-100
                        p-3
                        my-3
                        d-flex
                        flex-column
                        justify-content-between
                    "
                >
                    <img
                        :src="workshop.imageUrl"
                        class="card-img-top"
                        :alt="workshop.name"
                    />
                    <div class="card-body" style="flex-grow: 0">
                        <h5 class="card-title">{{ workshop.name }}</h5>
                        <div class="card-text">
                            <div>
                                <span class="badge text-bg-primary">{{
                                    workshop.category
                                }}</span>
                            </div>
                            <div>
                                <span
                                    class="badge"
                                    :class="getBadgeClass(workshop, 'online')"
                                    >Online</span
                                >
                                <span
                                    class="badge"
                                    :class="getBadgeClass(workshop, 'inPerson')"
                                    >In-person</span
                                >
                            </div>
                            <div>
                                {{ workshop.location.address }},
                                {{ workshop.location.city }},
                                {{ workshop.location.state }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ -> src folder
import { getWorkshops } from '@/services/workshops';

export default {
    name: "WorkshopsList",
    data() {
        return {
            workshops: [],
            loading: false,
            error: null,
        };
    },
    methods: {
        getBadgeClass(workshop, mode) {
            return workshop.modes[mode] ? "bg-success" : "bg-secondary";
        },
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