import axios from 'axios';

const url = 'http://localhost:3000/api/user/user';

class UserService {
  static getUser() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = axios.get(url);
        const data = res.data;
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }

  static signUp() {}
}

export default UserService;
