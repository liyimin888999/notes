// 企业信息页面
import React, { Component } from 'react'
import { 
  Breadcrumb,
  Form,
  Input
} from 'antd'
import './Company.less'

const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
};

export default class Company extends Component {
  render() {
    return (
      <>
        <div className="lym-company">
          {/* 头部 */}
          <div className="lym-company-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统管理</Breadcrumb.Item>
              <Breadcrumb.Item>企业信息</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* 内容部份 */}
          <div className="lym-company-content">
            <div className="lym-company-content-content">
              <Form {...layout}>
                <Form.Item name="note" label="企业名称">
                  <Input placeholder="泰思瑞安科技有限公司"/>
                </Form.Item>
                <Form.Item name="note" label="企业简介">
                    <TextArea rows={8} placeholder="泰思瑞安科技有限公司"/>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
