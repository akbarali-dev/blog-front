import AboutService from '../service/about'

const state = {
    data: null,
    contact:null,
    isLoading: false,
    isLoadingSide: false,
    error: null,
}

const mutations = {
    getAboutStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getAboutSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getAboutFailure(state) {
        state.isLoading = false
    },
    getContactStart(state) {
        state.isLoadingSide = true
        state.contact = null
        state.error = null
    },
    getContactSuccess(state, payload) {
        state.isLoadingSide = false
        state.contact = payload
    },
    getContactFailure(state) {
        state.isLoadingSide = false
    },
}

const actions = {
    abouts(context) {
        return new Promise(resolve => {
            context.commit('getAboutStart')
            AboutService.abouts()
                .then(response => {
                    // console.log(response)
                    context.commit('getAboutSuccess', response.data)
                    // resolve(response.data.articles)
                })
                .catch(() => context.commit('getAboutFailure'))
        })
    },
    contact(context) {
        return new Promise(resolve => {
            context.commit('getContactStart')
            AboutService.contact()
                .then(response => {
                    // console.log(response)
                    context.commit('getContactSuccess', response.data)
                    // resolve(response.data.articles)
                })
                .catch(() => context.commit('getContactFailure'))
        })
    },
}

export default {state, mutations, actions}