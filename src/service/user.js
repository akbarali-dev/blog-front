import axios from './axios';
import {getCurrentUser} from "../helpers/persistaneStorage";


const UserService={
    sendMessage(message){
        const username = getCurrentUser('current-user')
        return axios.post(`/about/contact-save/${username}`, message)
    },

    alreadyExist(username){
        return axios.get(`/blog/user/${username}/`)
    }
}
export default UserService