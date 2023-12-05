import axios from './axios';
import {getCurrentUser} from "../helpers/persistaneStorage";

const BlogService={
    blogs(){
        const username = getCurrentUser('current-user')
        return axios.get(`/blog/blogs/${username}`)
    },
}
export default BlogService