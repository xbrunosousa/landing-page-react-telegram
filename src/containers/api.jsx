import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://blogdoiphone.com/wp-json/wp/v2/posts?search=telegram'
});
