<template>
	<div id="app">
		<main-header/>
		<router-view/>
	</div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
// import { mapActions } from 'vuex'

export default {
	components: { MainHeader },
	methods: {
		
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
