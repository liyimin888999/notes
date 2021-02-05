// 插件管理页面
import React, { Component } from 'react'
import {
  Breadcrumb
} from 'antd'
import './Plug.less'

export default class Plug extends Component {
  render() {
    return (
      <>
        <div className="lym-plug">
          {/* 头部 */}
          <div className="lym-plug-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统维护</Breadcrumb.Item>
              <Breadcrumb.Item>插件管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>
    )
  }
}
