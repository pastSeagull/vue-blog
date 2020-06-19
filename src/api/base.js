import axios from 'axios'

const instance = axios.create({
  baseURL: '/api/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

instance.interceptors.request.use(
  config => {
    return config;
  },
  /* error => {
    console.log(err)
    return Promise.reject()
  } */
)

instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      Promise.reject()
    }
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)

export default instance