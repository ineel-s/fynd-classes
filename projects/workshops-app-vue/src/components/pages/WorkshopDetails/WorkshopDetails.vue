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
                                {{workshop.startDate | date( 'indian' )}}
                                -
                                {{workshop.endDate | date( 'indian' )}}
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

        <div class="my-5">
            <div class="mb-2">
                <router-link
                    :to="{ name: 'sessions-list', params: { sessions: workshop.sessions } }"
                    class="mr-3"
                    exact-active-class="active"
                >
                    List of sessions
                </router-link>
                <router-link
                    :to="{ name: 'add-session' }"
                    exact-active-class="active"
                >
                    Add a session
                </router-link>
            </div>

            <!-- Hey router! show the child component here -->
            <router-view
                :id="workshop.id"
                :sessions="workshop.sessions"
                :vote="vote"
                :updateSession="updateSession"
            >
            </router-view>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { getWorkshopById } from "@/services/workshops";
import { vote } from "@/services/sessions";

export default {
    name: "WorkshopDetails",
    data() {
        return {
            id: "",
            loading: true,
            error: null,
            workshop: {
                sessions: []
            },
        };
    },
    // methods: {
    //     formatDate( isoDateString ) {
    //         const d = new Date( isoDateString );

    //         return d.toDateString();
    //     }
    // },
    methods: {
        async vote( session, voteType, event, idx ) {
            // console.log( session, voteType, event );

            try {
                const updatedSession = await vote( voteType, session.id );
            
                // eslint-disable-next-line vue/no-mutating-props
                this.workshop.sessions.splice( idx, 1, updatedSession );
                Vue.$toast.open({
                    message: `Your vote for <strong>${updatedSession.name}</strong> was registered`,
                    duration: 5000
                });
            } catch( error ) {
                Vue.$toast.open({
                    type: 'error',
                    message: error.message,
                    duration: 5000
                });
            }
        },
        async updateSession( session ) {
            this.workshop.sessions.push( session );
        }
    },
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
.active {
    color: crimson;
}
</style>