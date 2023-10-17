import {createStore} from 'vuex'
import abouts from '../modules/abouts';
import footer from "../modules/footer";

const store = createStore({
    state: {},
    mutations: {},
    action: {},
    modules: {abouts, footer}
})
export default store