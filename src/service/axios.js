import axios from 'axios'
import {getItem} from '../helpers/persistaneStorage'

axios.defaults.baseURL = 'http://127.0.0.1:8001'

export default axios