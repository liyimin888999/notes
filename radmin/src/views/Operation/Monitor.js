// 设备监控页面
import React, { Component } from 'react'
import { 
  Breadcrumb, 
  Tree,
  Input, 
  Select,
  Table
} from 'antd';
import './Monitor.less'

const { Search } = Input;
// const { Option } = Select;
const onSearch = value => console.log(value);

const selectAfter = (
  <Select className="select-after">
  </Select>
);

//左边树形连接线
const treeData = [
  {
    title: '北京',
    key: '1',
  },
  {
    title: '天津',
    key: '2',
  },
  {
    title: '重庆',
    key: '3',
  },
  {
    title: '上海',
    key: '4',
  },
  {
    title: '广州',
    key: '5',
    children: [
      {
        title: '会议室',
        key: '5-1'
      },
      {
        title: '培训室',
        key: '5-2'
      },
      {
        title: '总经理办公室',
        key: '5-3'
      },
      {
        title: '公共区域',
        key: '5-4'
      }
    ]
  }
]

// 表格数据
const dataSource = [
  {
    key: '2',
    name: '类型',
    age: '设备名称',
    address: '设备型号',
    state: '品牌',
    operation: '位置',
    end: 'IP地址',
    handle: '是否在线',
    asset: '运行状态',
    period: '生命周期'
  },
]

const columns = [
  {
    title: '类型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '设备名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '设备型号',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '品牌',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '位置',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: 'IP地址',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: '是否在线',
    dataIndex: 'handle',
    key: 'handle',
  },
  {
    title: '运行状态',
    dataIndex: 'asset',
    key: 'asset',
  },
  {
    title: '生命周期',
    dataIndex: 'period',
    key: 'period',
  },
];

export default class Monitor extends Component {
  render() {
    return (
      <>
        <div className="lym-monitor">
          {/* 头部 */}
          <div className="lym-monitor-header">
            <Breadcrumb>
              <Breadcrumb.Item>空间应用</Breadcrumb.Item>
              <Breadcrumb.Item>空间管理</Breadcrumb.Item>
              <Breadcrumb.Item>广州</Breadcrumb.Item>
              <Breadcrumb.Item>会议室</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="lym-monitor-conent">
            {/* 内容左边模块部份 */}
            <div className="lym-monitor-conent-left">
            <Tree
              className="tree"
              showLine
              // checkable
              treeData={treeData}
              style={{paddingLeft: '10%'}}
            />
            </div>
            <div className="lym-monitor-conent-right">
              <div className="lym-monitor-content-header">
                <div className="header-content">
                  <Search className="input" placeholder="搜索设备名称/品牌/型号" onSearch={onSearch} style={{ width: 300 }} />
                  <Input className="input" placeholder="全部产品" addonAfter={selectAfter} style={{ width: 150 }}/>
                  <Input className="input" placeholder="所有在线状态" addonAfter={selectAfter} style={{ width: 150 }}/>
                </div>
              </div>
              <div className="lym-monitor-content-footer">
                <div className="table-light">
                  <Table className="table" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                </div>
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
