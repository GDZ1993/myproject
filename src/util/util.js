import axios from 'axios'
import Cookies from 'js-cookie'

let util = {}
const ajaxUrl = 'http://47.95.11.234:8080'
util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 60000
})
// http请求拦截器
util.ajax.interceptors.request.use(config => {
  if (config.url.indexOf('/user/login') === -1) {
    config.headers['token'] = Cookies.get('token')
  }
  return config
})
// http响应拦截器
util.ajax.interceptors.response.use(data => {
  var returnData
  if (typeof data === 'object') {
    returnData = data
  } else {
    returnData = JSON.parse(data)
  }
  if (returnData.data.code === 401) { // 验证token是否失效
    // localStorage.setItem('isTimeOut', true)
    // localStorage.removeItem('menu')
    // localStorage.removeItem('roleList')
    // localStorage.removeItem('roleTypes')
    Cookies.set('password', '')
    Cookies.set('token', '')
    Cookies.set('user', '')
    Cookies.set('active_name', '')
    Cookies.set('open_names', '')
    window.location.href = '/'
    return Promise.reject(returnData)
  } else {
    return returnData
  }
})
util.recursion = (value) => {
  let arr = []
  value.forEach((item) => {
    if (item.router_display !== -1) {
      arr.push(item)
    }
    let children = null
    if (item.children.length > 0) {
      children = util.recursion(item.children)
      if (children.length > 0) {
        children.forEach(child => {
          if (child.router_display !== -1) {
            arr.push(child)
          }
        })
      }
    }
  })
  return arr
}

export default util
