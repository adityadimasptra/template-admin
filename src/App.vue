<template>
    <v-app class="gray lighten-4">
        <top-navbar/>
        <v-content class="grey lighten-4">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        components: {
            "top-navbar": Navbar
        },
        data() {
            return {};
        },
        methods: {}
    };
</script>
<style lang="scss">
    * {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // text-align: center;
    }
</style>
