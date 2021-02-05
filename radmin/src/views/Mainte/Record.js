// 数据管理页面
import React, { Component } from 'react'
import {
  Breadcrumb
} from 'antd'
import './Record.less'

export default class Record extends Component {
  render() {
    return (
      <>
        <div className="lym-record">
          {/* 头部 */}
          <div className="lym-record-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统维护</Breadcrumb.Item>
              <Breadcrumb.Item>数据管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>
    )
  }
}
