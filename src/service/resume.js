import axios from './axios';
import {getCurrentUser} from "../helpers/persistaneStorage";

const ResumeService={
    resume(){
        const username = getCurrentUser('current-user')
        return axios.get(`/programming/resume/${username}`)
    },
}
export default ResumeService