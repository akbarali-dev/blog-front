import axios from './axios';
import {getCurrentUser, getItem} from "../helpers/persistaneStorage";

const AboutService={
    abouts(){
        const username = getCurrentUser('current-user')
        return axios.get(`/about/user-about/${username}`)
    },

    contact(){
        const username = getCurrentUser('current-user')
        return axios.get(`about/user-contact/${username}`)
    }
}
export default AboutService