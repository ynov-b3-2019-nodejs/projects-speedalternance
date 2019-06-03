import axios from "axios";

axios.defaults.baseURL = 'https://speed-alternance.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] = localStorage.access_token ? localStorage.access_token : null ;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class UserService {

    static signUp(user){
        return axios
            .post('/user/signup',user)
            .then((res) => {
                localStorage.setItem("access_token", res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user))
            })
    }

    static login(login){
        return axios
            .post('/user/login',login)
            .then(res => {
                localStorage.setItem("access_token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.user))
            });
    }
}

export default UserService;
