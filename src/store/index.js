
import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import {actions} from './actions'
import {getters} from './getters'
// import authService from '../services/AuthService'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
        token: JSON.parse(localStorage.getItem('token')) ,
        activeUser: {},
	},
	getters,
    actions,
	mutations
});