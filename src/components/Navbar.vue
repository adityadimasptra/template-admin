<template>
    <nav>
        <v-app-bar app flat>
            <v-app-bar-nav-icon class="grey--txt" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span class="font-weight-bold">ADEES</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app color="#1074bf" v-model="drawer" :mini-variant.sync="drawer" permanent>
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="../assets/user.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-title class="font-weight-bold white--text">Hi, Aditya</v-list-item-title>
                </v-list-item>

                <v-divider color="white"></v-divider>

                <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-subtitle class="white--text">{{link.text}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                links: [
                    {icon: "dashboard", text: "Dashboard", route: "/dashboard"},
                    {icon: "folder", text: "My Project", route: "/projects"},
                    {icon: "person", text: "Team", route: "/team"},
                    {icon: "network_check", text: "Skills", route: "/skills"}
                ]
            };
        }
    };
</script>

<style>
</style>