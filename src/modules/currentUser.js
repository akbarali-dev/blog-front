import UserService from "../service/user";

const state = {
    data: null,
    isLoading: false,
    error: null,
}

const mutations = {
    getUserStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getUserSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getUserFailure(state) {
        state.isLoading = false
    },
}

const actions = {
    alreadyExist(context, username) {
        return new Promise((resolve, reject) => {
            context.commit('getUserStart')
                UserService.alreadyExist(username)
                .then(response => {
                    console.log(response)
                    context.commit('getUserSuccess', response.data)
                    resolve()
                })
                .catch(() => {
                    context.commit('getUserFailure')
                    reject()
                })
        })
    },
}

export default {state, mutations, actions}