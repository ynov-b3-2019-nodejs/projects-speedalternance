import axios from 'axios';

axios.defaults.baseURL = 'https://speed-alternance.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] = localStorage.access_token
  ? "Bearer "+ localStorage.access_token
  : null;

class ChatService {
  static getAllChat() {
    return axios.get('/chatRoom/');
  }
  static createChat(chat) {
    return axios.post('/chatRoom/', chat);
  }
  static getAllUserChats(){
    return axios.get('/chatRoom/user');
  }

  static getCurrentChat(id) {
    return axios.get(`/chatRoom/${id}`);
  }

  static updateChat(id, chat) {
    return axios.put(`/chatRoom/${id}`, chat);
  }

  static getMyChat(){
    return axios.get('/chatRoom/user');
  }
}

export default ChatService;
