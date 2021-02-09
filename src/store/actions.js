
import authService from '../services/AuthService'

export const actions = {
        async login(store, credentials) {
            const {user, token} = await authService.login(credentials)
            localStorage.setItem('token', JSON.stringify(token))
            store.commit('setActiveUser', user)
            store.commit('setToken', token)
        },
        async getActiveUser(store) {
            const activeUser = await authService.getMyProfile()
            store.commit('setActiveUser', activeUser)
        },
        async logout(store) {
            await authService.logout
            store.commit('setToken', null)
            store.commit('setActiveUser', {})
            store.commit()
        }
}