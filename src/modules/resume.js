import ResumeService from '../service/resume'

const state = {
    data: null,
    isLoading: false,
    error: null,
}

const mutations = {
    getResumeStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getResumeSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getResumeFailure(state) {
        state.isLoading = false
    },
}

const actions = {
    resume(context) {
        return new Promise(resolve => {
            context.commit('getResumeStart')
            ResumeService.resume()
                .then(response => {
                    // console.log(response)
                    context.commit('getResumeSuccess', response.data)
                    // resolve(response.data.articles)
                })
                .catch(() => context.commit('getResumeFailure'))
        })
    },
}

export default {state, mutations, actions}