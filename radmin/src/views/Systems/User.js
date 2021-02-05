// 用户管理页面
import React, { Component } from 'react'
import { 
  Breadcrumb,
} from 'antd'
import './User.less'

export default class User extends Component {
  render() {
    return (
      <>
        <div className="lym-user">
          {/* 头部 */}
          <div className="lym-user-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统管理</Breadcrumb.Item>
              <Breadcrumb.Item>用户管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>
    )
  }
}
