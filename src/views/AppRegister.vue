<template>
    <div>
        <form @submit.prevent="handleRegister" >
            <label for="name"> Name: </label>
            <input id="name" type="text" v-model="credentials.name" required> <br/><br/>

            <label for="email"> Email: </label>
            <input id="email" type="email" v-model="credentials.email" required> <br/><br/>

            <label for="password"> Password: </label>
            <input id="password" type="password" v-model="credentials.password" required> <br/><br/>

            <label for="confirm-password"> Confirm password: </label>
            <input id="confirm-password" type="password" v-model="credentials.password_confirmation" required> <br/><br/>

            <button type="submit"> Submit </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            credentials: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        }
    },
    methods: {
        async handleRegister() {
            try {
                await this.$store.dispatch('register', this.credentials)
                console.log('USER REGISTROVAN')
                this.$router.push('/login')
            } catch(error) {
                console.log('INVALID CREDENTIALS', this.credentials);
            }
        },
        ...mapActions(['register', 'getActiveUser'])
    }
}
</script>

<style>

</style>
