import axios from 'axios';

const api = axios.create({
  baseURL: 'http://app-02b44e44-8a94-49ca-bd00-44e8fb82b984.cleverapps.io'  // tu backend en Clever Cloud
});

export default api;
