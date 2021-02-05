import Loadable from 'react-loadable'
import { Loading } from '../components'

const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
})

const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})

//可视化呈现模块
const Echarts = Loadable({
  loader: () => import('./Echarts'),
  loading: Loading
})
//空间应用模块
const Management = Loadable({
  loader: () => import('./Space/Management'),
  loading: Loading
})
const Scenario = Loadable({
  loader: () => import('./Space/Scenario'),
  loading: Loading
})
const Schedule = Loadable({
  loader: () => import('./Space/Schedule'),
  loading: Loading
})
//会议预约模块
const Order = Loadable({
  loader: () => import('./Meeting/Order'),
  loading: Loading
})
const Approve = Loadable({
  loader: () => import('./Meeting/Approve'),
  loading: Loading
})
const Manage = Loadable({
  loader: () => import('./Meeting/Manage'),
  loading: Loading
})
const Screen = Loadable({
  loader: () => import('./Meeting/Screen'),
  loading: Loading
})
const Content = Loadable({
  loader: () => import('./Meeting/Content'),
  loading: Loading
})
// 信息发布模块
const News = Loadable({
  loader: () => import('./News'),
  loading: Loading
})
// 自动化运维模块
const Monitor = Loadable({
  loader: () => import('./Operation/Monitor'),
  loading: Loading
})
const Alarm = Loadable({
  loader: () => import('./Operation/Alarm'),
  loading: Loading
})
const System = Loadable({
  loader: () => import('./Operation/System'),
  loading: Loading
})
// 资产管理模块
const Asset = Loadable({
  loader: () => import('./Asset'),
  loading: Loading
})
// 运营数据模块
const Vital = Loadable({
  loader: () => import('./Record/Vital'),
  loading: Loading
})
const Report = Loadable({
  loader: () => import('./Record/Report'),
  loading: Loading
})
const Log = Loadable({
  loader: () => import('./Record/Log'),
  loading: Loading
})
const Device = Loadable({
  loader: () => import('./Record/Device'),
  loading: Loading
})
// 系统管理模块
const Company = Loadable({
  loader: () => import('./Systems/Company'),
  loading: Loading
})
const Structure = Loadable({
  loader: () => import('./Systems/Structure'),
  loading: Loading
})
const User = Loadable({
  loader: () => import('./Systems/User'),
  loading: Loading
})
const Roles = Loadable({
  loader: () => import('./Systems/Roles'),
  loading: Loading
})
const Workspace = Loadable({
  loader: () => import('./Systems/Workspace'),
  loading: Loading
})
// 系统维护模块
const Token = Loadable({
  loader: () => import('./Mainte/Token'),
  loading: Loading
})
const Version = Loadable({
  loader: () => import('./Mainte/Version'),
  loading: Loading
})
const Plug = Loadable({
  loader: () => import('./Mainte/Plug'),
  loading: Loading
})
const Record = Loadable({
  loader: () => import('./Mainte/Record'),
  loading: Loading
})
export {
  Login,
  NotFound,
  Echarts,
  Management,
  Scenario,
  Schedule,
  Order,
  Approve,
  Manage,
  Screen,
  Content,
  News,
  Monitor,
  Alarm,
  System,
  Asset,
  Vital,
  Report,
  Log,
  Device,
  Company,
  Structure,
  User,
  Roles,
  Workspace,
  Token, 
  Version,
  Plug,
  Record
}