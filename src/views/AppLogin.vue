<template>
	<div>
		<form @submit.prevent="onSubmit" >
			<label for="email"> Email </label>
			<input required v-model="formData.email" id="email" type="email"> <br/><br/>

			<label for="password"> Password </label>
			<input required v-model="formData.password" id="password" type="password"> <br/><br/>

			<button type="submit"> Submit </button>
		</form>
	</div>
</template>

<script>
import authService from '../services/AuthService'
export default {
	data() {
		return {
			formData: {
				email: "",
				password: ""
			}
		}
	},
	methods: {
		async onSubmit() {
			await authService.login(this.formData)
			console.log(this.formData)
			this.$router.push('/movies')
		}
	}
}
</script>

<style>

</style>
