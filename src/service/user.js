import axios from './axios';

const UserService={
    sendMessage(message){
        return axios.post('/about/contact-save/', message)
    },
}
export default UserService