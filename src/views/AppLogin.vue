<template>
	<div>
		<form @submit.prevent="handleSubmit" >
			<label for="email"> Email </label>
			<input required v-model="credentials.email" id="email" type="email"> <br/><br/>

			<label for="password"> Password </label>
			<input required v-model="credentials.password" id="password" type="password"> <br/><br/>

			<button type="submit"> Submit </button>
			<p v-if="requestFailed" style="color: red" >Invalid credentials</p>
		</form>
	</div>
</template>

<script>
// import authService from '../services/AuthService'
import { mapGetters, mapActions } from 'vuex'

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
		...mapGetters(['activeUser']),
	},
	methods: {
		async handleSubmit() {
			// this.loginFailed = false
			try {
				await this.$store.dispatch('login', this.credentials)
				console.log('USER ULOGOVAN')
				this.$router.push('/movies')
			} 
			catch(error) {
				const requestFailed = true
				console.log(error.response.data.message)
				this.credentials.email = ""
				this.credentials.password = ""
			}
		},
		...mapActions(['login', 'getActiveUser'])
	}
}
</script>

<style>

</style>
