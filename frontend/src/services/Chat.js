import axios from 'axios';

axios.defaults.baseURL = 'https://speed-alternance.herokuapp.com/api';

class ChatService {
  static getAllChat() {
    return axios.get('/chatRoom/');
  }
  static createChat(chat) {
    return axios.post('/chatRoom/', chat);
  }

  static getCurrentChat(id) {
    return axios.get(`/chatRoom/${id}`);
  }

  static updateChat(id, chat) {
    return axios.put(`/chatRoom/${id}`, chat);
  }
}

export default ChatService;
