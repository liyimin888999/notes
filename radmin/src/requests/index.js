import axios from 'axios'
import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
  baseURL: isDev ? 'http://192.168.0.12:10003' : ''
})

service.interceptors.request.use((config) => {
  config.headers = {
//     Authorization: localStorage.getItem("token")    // 这里是token, 通过登录成功后得到的token
  }
  return config
})

service.interceptors.response.use((resp) => {
  console.log(resp)
  if (resp.status=== 200) {
    return resp.data
  } else {
    // 全局处理错误
    message.error(resp.data.errMsg)
  }
})
// 登录接口
export const loginRequest = (userInfo) => {
  return service.post('/host/api/login', userInfo)
}

//空间管理接口
// 空间管理下的场景管理接口
export const system = () => {
  return service.get('/host/scenes')
}
//空间管理下的设备管理接口
export const device = () => {
  return service.get('/host/devices')
}
//空间管理下的左侧菜单栏接口
export const trees = () => {
  return service.get('/host/rooms')
}
// 系统场景下的场景分组接口
export const scenario = () => {
  return service.get('/host/scene_groups')
}