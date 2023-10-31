import axios from './axios';

const PortfolioService={
    portfolio(){
        return axios.get('/programming/portfolio/')
    },
}
export default PortfolioService