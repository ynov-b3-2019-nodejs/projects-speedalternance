import axios from 'axios'

axios.defaults.baseURL = 'https://speed-alternance.herokuapp.com/api/post';
axios.defaults.headers.common['Authorization'] = localStorage.access_token ? localStorage.access_token : null ;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class PostService {

    static async getAll(){
        return axios.get('/');
    }
}


export default PostService;