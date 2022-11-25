<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <font-awesome-icon class="vote" icon="fa-solid fa-caret-up" @click="upvote" />
        <span>{{votes}}</span>
        <font-awesome-icon class="vote" icon="fa-solid fa-caret-down" @click="downvote" />
    </div>
</template>

<script>
    export default {
        name: 'AppVotingWidget',
        props: {
            votes: {
                type: Number,
                default: 0,
                validator( value ) {
                    return Number.isSafeInteger( value );
                }
            }
        },
        methods: {
            upvote() {
                this.$emit( 'upvote', 1 );
            },
            downvote() {
                this.$emit( 'downvote', 1 );
            }
        }
    }
</script>


<style scoped>
.vote {
    transform: scale( 2 );
    cursor: pointer;
    color: #aaa;
}

.vote:hover {
    color: black;
}
</style>