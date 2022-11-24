<template>
    <div>
        <div class="d-flex justify-content-center" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error.message }}
        </div>
        <div v-if="!loading && !error && workshop">
            <h1>{{workshop.name}}</h1>
            <hr />
            <b-row>
                <b-col cols="12" lg="4">
                    <b-img
                        :src="workshop.imageUrl"
                        fluid
                        :alt="workshop.name"
                    ></b-img>
                </b-col>
                <b-col cols="12" lg="8">
                    <b-row>
                        <b-col cols="6" lg="3" class="basic-details">
                            <div class="mb-2">
                                {{workshop.startDate | date}}
                                -
                                {{workshop.endDate | date}}
                            </div>
                            <div>
                                {{workshop.time}}
                            </div>
                        </b-col>
                        <b-col cols="6" lg="3">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-check" v-if="workshop.modes.online" />
                                <font-awesome-icon icon="fa-solid fa-xmark" v-else />
                                Online
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-solid fa-check" v-if="workshop.modes.inPerson" />
                                <font-awesome-icon icon="fa-solid fa-xmark" v-else />
                                In-person
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="12" v-html="workshop.description"></b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { getWorkshopById } from "@/services/workshops";

export default {
    name: "WorkshopDetails",
    data() {
        return {
            id: "",
            loading: false,
            error: null,
            workshop: null,
        };
    },
    // methods: {
    //     formatDate( isoDateString ) {
    //         const d = new Date( isoDateString );

    //         return d.toDateString();
    //     }
    // },
    async mounted() {
        // console.log( this.$router ); // this is the router object - useful for redirection to another page etc.
        console.log(this.$route); // useful for query and path params
        this.id = this.$route.params.id; // is a string and not a number

        this.loading = true;

        try {
            const workshop = await getWorkshopById(this.id);
            this.workshop = workshop;
        } catch (error) {
            this.error = error;
        } finally {
            this.loading = false;
        }
    },
};
</script>

<style scoped>
.basic-details {
    font-size: 0.8em;
    /* color: crimson; */
}
</style>