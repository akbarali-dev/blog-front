import {createStore} from 'vuex'
import abouts from '../modules/abouts';
import footer from "../modules/footer";
import resume from "../modules/resume";
import portfolio from "../modules/portfolio";
import blog from "../modules/blog";
import user from "../modules/user";
import currentUser from "../modules/currentUser";

const store = createStore({
    state: {},
    mutations: {},
    action: {},
    modules: {abouts, footer, resume, portfolio, blog, user, currentUser}
})
export default store