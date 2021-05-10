import { getAccessToken } from './auth';
const { REACT_APP_BASE_URL: baseUrl } = process.env;

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = getAccessToken();
