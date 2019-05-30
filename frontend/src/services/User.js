import axios from "axios";

axios.defaults.baseURL = 'https://speed-alternance.herokuapp.com/api/user';
axios.defaults.headers.common['Authorization'] = localStorage.access_token ? localStorage.access_token : null ;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

class UserService {

    static signUp(user){
        return axios
            .post('/signup',user)
            .then((res) => {
                localStorage.setItem("access_token", res.data.access_token);
            })
    }

    static login(login){
        return axios
            .post('/login',login);
    }
}

export default UserService;
