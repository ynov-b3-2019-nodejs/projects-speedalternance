import axios from 'axios';

axios.defaults.baseURL = 'https://speed-alternance.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] = localStorage.access_token
  ? "Bearer "+ localStorage.access_token
  : null;

class PostService {
  static async getAll() {
    return axios.get('/post');
  }

  static publish(post) {
    return axios.post('/post', post);
  }
}

export default PostService;
