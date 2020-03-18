<template>
    <div id="team" class="my-4 mx-4">
        <h2 class="subheading grey--text">Team</h2>
        <v-container class="my-5">
            <v-row>
                <v-col cols="12" class="text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, id natus cupiditate repellat,
                        assumenda libero alias laudantium magnam animi iste nulla? Excepturi libero voluptates earum
                        deserunt dolor, magnam dolorem error.</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col xl="3" md="6" sm="12" v-for="(person, index) in team" :key="index">
                    <v-card flat class="text-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="250">
                                <img :src="require(`@/assets/${person.avatar}`)"/>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="headline">{{person.name}}</div>
                            <div class="grey--text">{{person.role}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon small left>message</v-icon>
                                <span>Message</span>
                            </v-btn>
                            <v-btn text color="grey">
                                <v-icon small left>call</v-icon>
                                <span>Call</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                team: [
                    {
                        name: "Aditya Dimas Saputra",
                        role: "Web Developer",
                        avatar: "avatar.svg"
                    },
                    {
                        name: "Puji Rahayu",
                        role: "Marketing",
                        avatar: "avatar.svg"
                    },
                    {
                        name: "Aviona Putri Adji",
                        role: "Mobile Developer",
                        avatar: "avatar.svg"
                    },
                    {
                        name: "Alfan Putra Adji",
                        role: "Database Engineering",
                        avatar: "avatar.svg"
                    }
                ]
            };
        }
    };
</script>

<style>
</style>