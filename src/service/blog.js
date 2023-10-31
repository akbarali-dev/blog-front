import axios from './axios';

const BlogService={
    blogs(){
        return axios.get('/blog/blogs/')
    },
}
export default BlogService