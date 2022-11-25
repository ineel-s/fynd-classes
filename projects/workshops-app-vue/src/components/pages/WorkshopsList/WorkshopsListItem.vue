<template>
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
            <h5 class="card-title basic-details">{{ workshop.name }}</h5>
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
</template>

<script>
export default {
    name: "WorkshopsListItem",
    props: {
        workshop: {
            type: Object,
            required: true
        }
    },
    methods: {
        getBadgeClass(workshop, mode) {
            return workshop.modes[mode] ? "bg-success" : "bg-secondary";
        },
    }
};
</script>

<style>
</style>