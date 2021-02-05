// 令牌管理页面
import React, { Component } from 'react'
import {
  Breadcrumb
} from 'antd'
import './Token.less'

export default class Token extends Component {
  render() {
    return (
      <>
        <div className="lym-token">
          {/* 头部 */}
          <div className="lym-token-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统维护</Breadcrumb.Item>
              <Breadcrumb.Item>令牌管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>
    )
  }
}
