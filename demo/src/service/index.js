import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 1000
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  get: (url, data) => instance.get(url, {
    params: data
  }),

  post: (url, data) => instance.post(url, data),
  put: (url, data) => instance.put(url, data),
  delete: (url) => instance.delete(url)
}
