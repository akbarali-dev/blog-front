import AboutService from '../service/about'

const state = {
    data: null,
    isLoading: false,
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
}

const actions = {
    abouts(context) {
        return new Promise(resolve => {
            context.commit('getAboutStart')
            AboutService.abouts()
                .then(responce => {
                    context.commit('getAboutSuccess', responce.data)
                })
                .catch()
        })
    }
}

export default {state, mutations}