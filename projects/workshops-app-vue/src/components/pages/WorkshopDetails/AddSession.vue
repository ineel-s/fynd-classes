<template>
    <div>
        <h2>
            Add a session
            <router-link
                :to="`/workshops/${$route.params.id}`"
                class="btn btn-sm btn-primary float-right"
                >List of sessions</router-link
            >
        </h2>
        <hr />
        <b-form @submit.prevent="addSession" novalidate>
            <b-form-group
                class="mb-3"
                id="sequenceId-group"
                label="Sequence ID"
                label-for="sequenceId"
            >
                <b-form-input
                    id="sequenceId"
                    name="sequenceId"
                    aria-describedby="sequenceId-help"
                    v-model.number="$v.form.sequenceId.$model"
                    :state="validateState('sequenceId')"
                    @blur="$v.form.sequenceId.$touch()"
                />
                <b-form-invalid-feedback id="sequenceId-help">
                    Sequence ID is a number which denotes the order of the
                    session in the workshop. For example, the first session in
                    the workshop will have sequence ID 1.
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
                class="mb-3"
                id="name-group"
                label="Name"
                label-for="name"
            >
                <b-form-input
                    id="name"
                    name="name"
                    aria-describedby="name-help"
                    v-model="$v.form.name.$model"
                    :state="validateState('name')"
                    @blur="$v.form.name.$touch()"
                />
                <b-form-invalid-feedback id="name-help">
                    Name is required
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
                class="mb-3"
                id="speaker-group"
                label="Speaker"
                label-for="speaker"
            >
                <b-form-input
                    id="speaker"
                    name="speaker"
                    aria-describedby="speaker-help"
                    v-model="$v.form.speaker.$model"
                    :state="validateState('speaker')"
                    @blur="$v.form.speaker.$touch()"
                />
                <b-form-invalid-feedback id="speaker-help">
                    <div v-if="!$v.form.speaker.required">
                        At least one speaker is required
                    </div>
                    <div v-if="!$v.form.speaker.csv">
                        You can only provide speaker names(s) separated by
                        commas.
                    </div>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
                class="mb-3"
                id="duration-group"
                label="Duration"
                label-for="duration"
            >
                <b-form-input
                    id="duration"
                    name="duration"
                    aria-describedby="duration-help"
                    v-model="$v.form.duration.$model"
                    :state="validateState('duration')"
                    @blur="$v.form.duration.$touch()"
                />
                <b-form-invalid-feedback id="duration-help">
                    <div v-if="!$v.form.duration.required">
                        This field is required.
                    </div>
                    <div v-if="!$v.form.duration.decimal">
                        You can only have decimal number. Eg. for a 2 hour 30 minutes session, type
                    2.5
                    </div>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
                class="mb-3"
                id="level-group"
                label="Level"
                label-for="level"
            >
                <b-form-select
                    id="level"
                    name="level"
                    aria-describedby="level-help"
                    v-model="$v.form.level.$model"
                    :state="validateState('level')"
                    @blur="$v.form.level.$touch()"
                    :options="levels"
                ></b-form-select>

                <b-form-invalid-feedback id="level-help">
                    <div v-if="!$v.form.level.required">
                        This field is required.
                    </div>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
                class="mb-3"
                id="abstract-group"
                label="Abstract"
                label-for="abstract"
            >
                <b-form-textarea
                    id="abstract"
                    name="abstract"
                    aria-describedby="abstract-help"
                    v-model="$v.form.abstract.$model"
                    :state="validateState('abstract')"
                    @blur="$v.form.abstract.$touch()"
                ></b-form-textarea>
                <b-form-invalid-feedback id="abstract-help">
                    <div v-if="!$v.form.abstract.required">
                        This field is required.
                    </div>
                    <div v-if="!$v.form.abstract.minLength">
                        Minimum 20 characters
                    </div>
                </b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary">Add a session</b-button>
            <b-button class="ml-2" @click="resetForm()">Reset</b-button>
        </b-form>
    </div>
</template>
  
  <script>
import { validationMixin } from "vuelidate";
import { required, decimal, minLength, minValue } from "vuelidate/lib/validators";
import { addSession } from "@/services/sessions";
import Vue from "vue";
import Config from "@/config";

export default {
    name: "AddSession",
    mixins: [validationMixin],
    props: {
        updateSession: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            form: {
                sequenceId: null,
                name: null,
                speaker: null,
                level: null,
                duration: null,
                abstract: null,
            },
            levels: [
                { text: '-- Select the level --', value: '' },
                { text: 'Basic', value: 'Basic' },
                { text: 'Intermediate', value: 'Intermediate' },
                { text: 'Advanced', value: 'Advanced' }
            ]
        };
    },
    validations: {
        form: {
            sequenceId: {
                required,
                minValue: minValue(1)
            },
            name: {
                required,
            },
            speaker: {
                required,
                csv(value) {
                    const csvPattern = /^[A-Za-z ]+(,[A-Za-z ]+)*$/;
                    return csvPattern.test(value);
                }
            },
            duration: {
                required,
                decimal
            },
            level: {
                required
            },
            abstract: {
                required,
                minLength: minLength(20)
            }
        },
    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                sequenceId: null,
                name: null,
                speaker: null,
                level: null,
                duration: null,
                abstract: null,
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        async addSession() {
            this.$v.form.$touch();

            const session = {
                workshopId: +this.$route.params.id,
                upvoteCount: 0,
                ...this.form,
            };

            if (!this.$v.form.$invalid) {
                try {
                    const updatedSession = await addSession(session);

                    this.updateSession( updatedSession );

                    Vue.$toast.open({
                        message: `Session '${updatedSession.name}' with id=${updatedSession.id} was added`,
                        type: "success",
                        duration: Config.duration,
                    });

                    // use $router and not $route
                    this.$router.push({
                        name: "sessions-list",
                    });
                } catch (error) {
                    Vue.$toast.open({
                        message: error.message,
                        type: "error",
                        duration: Config.duration,
                    });
                }
            } else {
                Vue.$toast.open({
                    message: "Please correct the errors and submit",
                    type: "error",
                    duration: Config.duration,
                });
            }
        },
    },
};
</script>
  
  <style>
</style>