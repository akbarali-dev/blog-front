import axios from 'axios'
import {baseUrl} from '../contstants'
import {getItem} from '../helpers/persistaneStorage'
// export const baseUrl='http://127.0.0.1:8001'
axios.defaults.baseURL = baseUrl

export default axios
