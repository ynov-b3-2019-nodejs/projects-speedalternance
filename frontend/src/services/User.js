import axios from "axios";

const url = process.env.API_URI+"/api/user/" || 'http://localhost:3000/api/user/';

class UserService {

    static signUp(user){
        return axios.
            post(`${url}/signup`,{
                params: user
            });
    }
}

export default UserService;