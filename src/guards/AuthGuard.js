import store from '../store'

export function authGuard(to, from, next) {
    const isAuthenticated = store.getters.isAuthenticated
    if (isAuthenticated) {
        next('/login')
        return;
    } else {
        next()
        return;
    }
}