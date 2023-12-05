import axios from './axios';
import {getCurrentUser} from "../helpers/persistaneStorage";

const PortfolioService={
    portfolio(){
        const username = getCurrentUser('current-user')
        return axios.get(`/programming/portfolio/${username}`)
    },
}
export default PortfolioService