import axios from 'axios';

class ChatService {
  static createChat(chat) {
    return axios.post('http://localhost:3000/api/chatRoom/', chat);
  }

  static getCurrentChat(id) {
    return axios.get(`http://localhost:3000/api/chatRoom/${id}`);
  }
}

export default ChatService;
