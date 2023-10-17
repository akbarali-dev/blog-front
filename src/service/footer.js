import axios from "./axios";

const FooterService={
    info(){
        return axios.get('/about/info/')
    },
}
export default FooterService