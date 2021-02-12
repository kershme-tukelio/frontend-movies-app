<template>
    <div id="nav">
        <router-link to="/"> Movies </router-link> |
        <span v-if="isAuthenticated" @click="handleLogout"> Logout </span>
        <router-link v-else to="/login" > Login </router-link> |
        <span v-if="isAuthenticated" > {{activeUser.name}} </span>
        <router-link v-else to="/register" > Register </router-link>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'main-header',
    computed: {
        ...mapGetters(['activeUser', 'isAuthenticated'])
    },
    methods: {
        ...mapActions(['logout']),
        async handleLogout() {
            await this.logout();
            this.$router.push('/login');
        }
    }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
