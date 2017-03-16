import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sideNavStatus: false
    },
    getters: {

    },
    mutations: {
        sideNavSwitchStatus: state => {
            state.sideNavStatus = !state.sideNavStatus
        },
        sideNavStatusflase: state => {
            state.sideNavStatus = false
        }
    }
})