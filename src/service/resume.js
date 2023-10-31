import axios from './axios';

const ResumeService={
    resume(){
        return axios.get('/programming/resume/')
    },
}
export default ResumeService