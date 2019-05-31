import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/user';
axios.defaults.headers.common['Authorization'] = localStorage.access_token
  ? localStorage.access_token
  : null;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

class UserService {
  static signUp(user) {
    return axios.post('/signup', user);
  }

  static login(login) {
    return axios.post('/login', login);
  }

  static getUser() {
    return axios.get('/');
  }
}

export default UserService;
