import axios from 'axios'
import router from '../router';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://192.168.52.106:8089/',
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => {
      if (localStorage.getItem('token')) {
        
        config.headers.token = localStorage.getItem('token');
      }
   
      return config;
    },
    error => {
      return Promise.reject(error);
    });

    instance.interceptors.response.use(res => {
      console.log(res.data);
        if (res.data.msg == 404) {
          router.push('/lost')
        }
        return res
    }, err => {
        console.log(err);
    })

  return instance(config)
}
