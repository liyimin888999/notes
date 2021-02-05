// 组织架构页面
import React, { Component } from 'react'
import { 
  Breadcrumb,
} from 'antd'
import './Structure.less'

export default class Structure extends Component {
  render() {
    return (
      <>
        <div className="lym-structure">
          {/* 头部 */}
          <div className="lym-structure-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统管理</Breadcrumb.Item>
              <Breadcrumb.Item>组织架构</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </>
    )
  }
}
