import UserService from "../service/user";

const state = {
    data: null,
    isLoading: false,
    error: null,
    sender: false
}

const mutations = {
    postUserStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    postUserSuccess(state, payload) {
        state.sender=true
        state.isLoading = false
        state.data = payload
    },
    postUserFailure(state) {
        state.isLoading = false
    },
    senderFailure(state){
        state.sender=false
    }
}

const actions = {
    sendMessage(context, message) {
        return new Promise(resolve => {
            context.commit('postUserStart')
                UserService.sendMessage(message)
                .then(response => {
                    context.commit('postUserSuccess', response.data)
                    // resolve(response.data.articles)
                })
                .catch(() => context.commit('postUserFailure'))
        })
    },
}

export default {state, mutations, actions}