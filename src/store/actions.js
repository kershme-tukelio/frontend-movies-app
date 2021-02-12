
import authService from '../services/AuthService'

export const actions = {
        async login(store, credentials) {
            const { user, token } = await authService.login(credentials)
            localStorage.setItem('token', JSON.stringify(token))
            store.commit('setActiveUser', user)
            store.commit('setToken', token)
        },
        async getActiveUser(store) {
            if (store.getters.isAuthenticated) {
                const activeUser = await authService.getMyProfile()
                store.commit('setActiveUser', activeUser)
            } else {
                store.commit('setActiveUser', {})                
            }
        },
        async logout(store) {
            await authService.logout()
            localStorage.setItem('token', null)
            store.commit('setToken', null)
            store.commit('setActiveUser', {})
        },
        async register(store, credentials) {
            await authService.register(credentials)
            // localStorage.setItem('token', JSON.stringify(token))
            // store.commit('setActiveUser', user)
            // store.commit('setToken', token)
        }
}