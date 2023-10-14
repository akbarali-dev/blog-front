import axios from './axios';

const AboutService={
    about(){
        return axios.get('/about/user-about/')
    }
}
export default AboutService