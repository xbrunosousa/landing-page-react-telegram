import axios from 'axios';

export default axios.create({
  baseURL: 'https://blogdoiphone.com/wp-json/wp/v2/'
});
