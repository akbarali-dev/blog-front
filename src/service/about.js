import axios from './axios';

const AboutService={
    abouts(){
        return axios.get('/about/user-about/')
    },
    contact(){
        return axios.get('about/user-contact/')
    }
}
export default AboutService