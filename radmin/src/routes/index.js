import {
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
} from '../views'


export const mainRoutes = [{
  pathname: '/Login',
  component: Login
},{
  pathname: '/404',
  component: NotFound
}]

export const adminRoutes = [{
  pathname: '/admin/Echarts',
  component: Echarts,
  title: '可视化呈现',
  isNav: true,
  exact: true
},{
  pathname: '/admin/Space',
  title: '空间应用',
  isNav: true,
  exact: true,
  children: [{
      pathname: '/admin/Space/Management',
      component: Management,
      title: '空间管理',
      isNav: true
    },{
      pathname: '/admin/Space/Scenario',
      component: Scenario,
      title: '系统场景',
      isNav: true
    },{
      pathname: '/admin/Space/Schedule',
      component: Schedule,
      title: '日程自动化',
      isNav: true
    }]
},{
  pathname: '/admin/Meeting',
  title: '会议预约',
  isNav: true,
  exact: true,
  children: [{
    pathname: '/admin/Meeting/Order',
    component: Order,
    title: '会议预约',
    isNav: true
  },{
    pathname: '/admin/Meeting/Approve',
    component: Approve,
    title: '会议审批',
    isNav: true
  },{
    pathname: '/admin/Meeting/Manage',
    component: Manage,
    title: '会议室管理',
    isNav: true
  },{
    pathname: '/admin/Meeting/Screen',
    component: Screen,
    title: '会议屏管理',
    isNav: true
  },{
    pathname: '/admin/Meeting/Content',
    component: Content,
    title: '内容发布',
    isNav: true
  }]
},{
  pathname: '/admin/News',
  component: News,
  title: '信息发布',
  isNav: true,
  exact: true
},
{
  pathname: '/admin/Operation',
  title: '自动化运维',
  isNav: true,
  exact: true,
  children: [{
      pathname: '/admin/Operation/Monitor',
      component: Monitor,
      title: '设备监测',
      isNav: true
    },{
      pathname: '/admin/Operation/Alarm',
      component: Alarm,
      title: '告警通知',
      isNav: true
    },{
      pathname: '/admin/Operation/System',
      component: System,
      title: '系统拓扑图',
      isNav: true
    }]
},{
  pathname: '/admin/Asset',
  component: Asset,
  title: '资产管理',
  isNav: true,
  exact: true
},{
  pathname: '/admin/Record',
  title: '运营数据',
  isNav: true,
  exact: true,
  children: [{
      pathname: '/admin/Record/Vital',
      component: Vital,
      title: '会议统计',
      isNav: true
    },{
      pathname: '/admin/Record/Report',
      component: Report,
      title: '会议报表',
      isNav: true
    },{
      pathname: '/admin/Record/Log',
      component: Log,
      title: '告警记录',
      isNav: true
    },{
      pathname: '/admin/Record/Device',
      component: Device,
      title: '设备统计',
      isNav: true
    }]
},{
  pathname: '/admin/Systems',
  title: '系统管理',
  isNav: true,
  exact: true,
  children: [{
    pathname: '/admin/Systems/Company',
    component: Company,
    title: '企业信息',
    isNav: true
  },{
    pathname: '/admin/Systems/Structure',
    component: Structure,
    title: '组织架构',
    isNav: true
  },{
    pathname: '/admin/Systems/User',
    component: User,
    title: '用户管理',
    isNav: true
  },{
    pathname: '/admin/Systems/Roles',
    component: Roles,
    title: '角色管理',
    isNav: true
  },{
    pathname: '/admin/Systems/Workspace',
    component: Workspace,
    title: '空间管理',
    isNav: true
  }]
},{
  pathname: '/admin/Mainte',
  title: '系统维护',
  isNav: true,
  exact: true,
  children: [{
    pathname: '/admin/Mainte/Token',
    component: Token,
    title: '令牌管理',
    isNav: true
  },{
    pathname: '/admin/Mainte/Version',
    component: Version,
    title: '版本更新',
    isNav: true
  },{
    pathname: '/admin/Mainte/Plug',
    component: Plug,
    title: '插件管理',
    isNav: true
  },{
    pathname: '/admin/Mainte/Record',
    component: Record,
    title: '数据管理',
    isNav: true
  }]
}]