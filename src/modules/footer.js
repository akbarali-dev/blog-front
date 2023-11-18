import FooterService from '../service/footer'

const state = {
    data: null,
    isLoading: false,
    error: null,
}

const mutations = {
    getInfoStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getInfoSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getInfoFailure(state) {
        state.isLoading = false
    },
}

const actions={
    info(context){
        return new Promise(resolve => {
            context.commit('getInfoStart')
            FooterService.info()
                .then(response => {
                    // console.log(response.data)
                    context.commit('getInfoSuccess', response.data)
                })
                .catch(() => context.commit('getInfoFailure'))
        })
    }
}

export default {state, mutations, actions}