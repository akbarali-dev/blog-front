import BlogService from "../service/blog";

const state = {
    data: null,
    isLoading: false,
    error: null,
}

const mutations = {
    getBlogStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getBlogSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getBlogFailure(state) {
        state.isLoading = false
    },
}

const actions = {
    blog(context) {
        return new Promise(resolve => {
            context.commit('getBlogStart')
                BlogService.blogs()
                .then(response => {
                    // console.log(response)
                    context.commit('getBlogSuccess', response.data)
                    // resolve(response.data.articles)
                })
                .catch(() => context.commit('getBlogFailure'))
        })
    },
}

export default {state, mutations, actions}