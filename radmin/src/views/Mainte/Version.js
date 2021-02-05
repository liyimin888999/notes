// 版本更新页面
import React, { Component } from 'react'
import {
  Breadcrumb
} from 'antd'
import './Version.less'

export default class Version extends Component {
  render() {
    return (
      <>
        <div className="lym-version">
          {/* 头部 */}
          <div className="lym-version-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统维护</Breadcrumb.Item>
              <Breadcrumb.Item>版本更新</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>
    )
  }
}
