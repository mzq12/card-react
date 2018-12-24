import axios from 'axios'
import qs from 'querystring'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true

// POST 传参序列化, request 统一处理操作
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
}, (error) => {
    alert('参数传入错误')
    return Promise.reject(error)
})
export default axios