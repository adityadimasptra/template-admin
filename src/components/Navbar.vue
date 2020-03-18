<template>
    <nav>
        <v-app-bar app flat>
            <v-app-bar-nav-icon class="grey--txt" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span class="font-weight-bold">ADEES</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu
                    transition="slide-y-transition"
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on">Menu</v-btn>
                </template>
                <v-list>
                    <v-list-item
                            v-for="menu in miniMenus"
                            :key="menu.text"
                            route :to="menu.route" color="teal"
                    >
                        <v-list-item-action>
                            <v-icon>{{menu.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-subtitle>{{menu.text}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" :mini-variant.sync="drawer" permanent>
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="../assets/user.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-title class="font-weight-bold">Hi, Aditya</v-list-item-title>
                </v-list-item>

                <v-divider color="white"></v-divider>
                <v-list-item color="primary" router :to="menus[0].route">
                    <v-list-item-action>
                        <v-icon>{{menus[0].icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{menus[0].text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group
                        v-for="menu in multiMenu"
                        :key="menu.title"
                        v-model="menu.active"
                        no-action
                        :color="menu.color"
                >
                    <template v-slot:activator>
                        <v-list-item-action>
                            <v-icon>{{menu.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{menu.text}}</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                            v-for="menu in menu.submenu"
                            :key="menu.title"
                            router :to="menu.route"
                    >

                        <v-list-item-content>
                            <v-list-item-subtitle>{{menu.text}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                miniMenus: [
                    {icon: "person", text: "Team", route: "/team"},
                    {icon: "folder", text: "Projects", route: "/projects"},
                ],
                menus: [
                    {icon: "dashboard", text: "Dashboard", route: "/dashboard"}
                ],
                multiMenu: [

                    {
                        icon: "folder",
                        text: "Master",
                        active: null,
                        color: "success",
                        submenu: [
                            {icon: "folder", text: "Cargo Companies", route: "/admin/cargo-companies"},
                            {icon: "folder", text: "Ship Companies", route: "/admin/ship-companies"},
                            {icon: "folder", text: "Cargo Type", route: "/admin/cargo-type"},
                            {icon: "folder", text: "Vessel Type", route: "/admin/vessel-type"},
                            {icon: "folder", text: "Classifications", route: "/admin/classifications"},
                            {icon: "folder", text: "User Type", route: "/admin/user-type"},
                            {icon: "folder", text: "Users", route: "/admin/users"}
                        ]
                    },
                    {
                        icon: "business",
                        text: "Transactions",
                        active: null,
                        color: "warning",
                        submenu: [
                            {icon: "loop", text: "Vessels Verification", route: "/admin/vessels-verification"},
                            {icon: "add_to_queue", text: "Shipments", route: "/admin/shipments"}
                        ]
                    },
                    {
                        icon: "network_check",
                        text: "Reports",
                        active: null,
                        color: "deep-purple",
                        submenu: [
                            {icon: "insert_chart", text: "Pending Transactions", route: "/admin/pending-transactions"},
                            {icon: "insert_chart", text: "Expired Transactions", route: "/admin/expired-transactions"},
                            {
                                icon: "insert_chart",
                                text: "Cancelled Transactions",
                                route: "/admin/cancelled-transactions"
                            },
                            {
                                icon: "insert_chart",
                                text: "Transaction on Progress",
                                route: "/admin/transactions-on-progress"
                            },
                            {
                                icon: "library_books",
                                text: "Transaction Completed",
                                route: "/admin/transactions-completed"
                            }
                        ]
                    },
                ]
            };
        }
    };
</script>

<style>
</style>