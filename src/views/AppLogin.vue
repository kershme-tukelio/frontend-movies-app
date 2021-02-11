<template>
	<div>
		<form @submit.prevent="handleSubmit" >
			<label for="email"> Email </label>
			<input required v-model="credentials.email" id="email" type="email"> <br/><br/>

			<label for="password"> Password </label>
			<input required v-model="credentials.password" id="password" type="password"> <br/><br/>

			<button type="submit"> Submit </button>
			<!-- <p v-if="loginFailed" style="color: red" >Invalid credentials</p> -->
		</form>
		<div>
			<h3>Name: {{activeUser.name}}</h3>
			<h3>Email: {{activeUser.email}}</h3>
		</div>
	</div>
</template>

<script>
// import authService from '../services/AuthService'
import { mapGetters, mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
	data() {
		return {
			credentials: {
				email: "",
				password: "",
			}
		}
	},
	computed: {
		...mapGetters(['counter', 'doubledCounter', 'activeUser']),
		...mapMutations(['incrementCounter', 'setCounter'])
	},
	methods: {
		async handleSubmit() {
			// this.loginFailed = false
			try {
				await this.$store.dispatch('login', this.credentials)
				console.log('user ulogovan')
			} 
			catch(error) {
				console.log('invalid credentials')
				// this.loginFailed = true
			}
			this.$router.push('/movies')
		},
		resetCounter() {
			this.setCounter = 0;
		},
		...mapActions(['login', 'getActiveUser'])
	},
	created() {
		console.log({store: this.store})
		console.log('counter is ', this.counter)
	},
}
</script>

<style>

</style>
