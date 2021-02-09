import http from './BaseService.js'

class AuthService 
{
    async register(credentials) {
        const response = await http.post('/register', credentials)
        return response.data;
    }

    async login(credentials) {
        const response = await http.post('/login', credentials)
        return response.data;
    }

    async logout() {
        const response = await http.post('/logout')
        return response.data;
    }
    async getMyProfile() {
        const response = await http.get('/me')
        return response.data;
    }
}

const authService = new AuthService()
export default authService