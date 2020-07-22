import axios from 'axios';

const instance = axios.create({
    baseURL = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY';
});

export default instance;