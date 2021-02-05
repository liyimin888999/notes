// 会议审批页面
import React, { Component } from 'react'
import { 
  Breadcrumb, 
  Button,
  Input,
  Table,
} from 'antd'
import './Approve.less'

const { Search } = Input;
const onSearch = value => console.log(value);

// 表格数据
const dataSource = [
  {
    key: '2',
    name: '主题',
    age: '状态',
    address: '申请人',
    state: '参加人',
    operation: '开始时间',
    end: '结束时间',
    handle:<div><Button  disabled={false} ghost={false} style={{border: 0}}>操作</Button></div>
  },
];
const dataSources = [
  {
    key: '2',
    name: '主题',
    age: '状态',
    address: '申请人',
    state: '参加人',
    operation: '开始时间',
    end: '结束时间',
    handle:<div><Button style={{border: 0}}>操作</Button></div>
  },
];

const columns = [
  {
    title: '主题',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '状态',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '申请人',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '参加人',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '开始时间',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: '结束时间',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: '操作',
    dataIndex: 'handle',
    key: 'handle',
  },
];


export default class Approve extends Component {
  render() {
    return (
      <>
        <div className="lym-approve">
          {/* 头部 */}
          <div className="lym-approve-header">
            <Breadcrumb>
              <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>会议预约</Breadcrumb.Item>
              <Breadcrumb.Item>会议审批</Breadcrumb.Item>
            </Breadcrumb>
            <Button className="btn2">列表模式</Button>
            <Button className="btn1">图像模式</Button>
          </div>
          {/* 内容部份 */}
          <div className="lym-approve-content">
            <div className="lym-approve-content-header">
              <div className="right">
                <Search className="search" placeholder="搜索" onSearch={onSearch} />
              </div>
            </div>
            <div className="lym-approve-content-footer">
              <div className="table-light">
                <Table className="table" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              </div>
              <Table className="table1" showHeader={false} dataSource={dataSources} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSources} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSources} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSources} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSources} columns={columns} pagination={false} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
