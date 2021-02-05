// 角色管理页面
import React, { Component } from 'react'
import {
  Breadcrumb
} from 'antd'
import './Roles.less'

export default class Roles extends Component {
  render() {
    return (
      <>
        <div className="lym-roles">
          {/* 头部 */}
          <div className="lym-roles-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统管理</Breadcrumb.Item>
              <Breadcrumb.Item>角色管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>
    )
  }
}
