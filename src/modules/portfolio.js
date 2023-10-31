import PortfolioService from "../service/portfolio";

const state = {
    data: null,
    isLoading: false,
    error: null,
}

const mutations = {
    getPortfolioStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getPortfolioSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getPortfolioFailure(state) {
        state.isLoading = false
    },
}

const actions = {
    portfolio(context) {
        return new Promise(resolve => {
            context.commit('getPortfolioStart')
                PortfolioService.portfolio()
                .then(response => {
                    console.log(response)
                    context.commit('getPortfolioSuccess', response.data)
                    // resolve(response.data.articles)
                })
                .catch(() => context.commit('getPortfolioFailure'))
        })
    },
}

export default {state, mutations, actions}