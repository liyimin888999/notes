// 告警记录页面
import React, { Component } from 'react'
import { WarningOutlined } from '@ant-design/icons'
import { 
  Breadcrumb,
  Button,
  Input,
  Select,
  Table,
  Pagination 
} from 'antd'
import './Log.less'

// const { Search } = Input;
// const onSearch = value => console.log(value);
const selectAfter = (
  <Select className="select-after">
  </Select>
);

// 表格数据
const dataSource = [
  {
    key: '2',
    name: '报警时间',
    age: 'ID',
    address: '告警级别',
    state: '来源分类',
    operation: '业务类别',
    end: '子系统',
    handle: '告警所在位置',
    device: '设备名称',
    number: '设备编号',
    details: '详细描述',
    duration: '持续时间',
    dispose: '处理'
  },
];

const columns = [
  {
    title: '报警时间',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '告警级别',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '来源分类',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '业务类别',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: '子系统',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: '告警所在位置',
    dataIndex: 'handle',
    key: 'handle',
  },
  {
    title: '设备名称',
    dataIndex: 'device',
    key: 'device',
  },
  {
    title: '设备编号',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '详细描述',
    dataIndex: 'details',
    key: 'details',
  },
  {
    title: '持续时间',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: '处理',
    dataIndex: 'dispose',
    key: 'dispose',
  }
];

export default class Log extends Component {
  render() {
    return (
      <>
        <div className="lym-log">
          {/* 头部 */}
          <div className="lym-log-header">
            <Breadcrumb>
              <Breadcrumb.Item>运营数据</Breadcrumb.Item>
              <Breadcrumb.Item>告警记录</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* 内容部份 */}
          <div className="lym-log-conent">
            <div className="lym-log-conent-header">
              <ul>
                <li><p className="zc">总告警数</p></li>
                <li><p className="sz"><span>280</span></p></li>
                <li><p className="ts"><WarningOutlined style={{fontSize: 30,marginTop: '36%',color: 'white'}} /></p></li>
              </ul>
              <ul>
                <li><p className="zc">紧急告警</p></li>
                <li><p className="sz"><span>30</span></p></li>
                <li><p className="ts"><WarningOutlined style={{fontSize: 30,marginTop: '36%',color: 'white'}} /></p></li>
              </ul>
              <ul>
                <li><p className="zc">重要告警</p></li>
                <li><p className="sz"><span>60</span></p></li>
                <li><p className="ts"><WarningOutlined style={{fontSize: 30,marginTop: '36%',color: 'white'}} /></p></li>
              </ul>
              <ul>
                <li><p className="zc">一般告警</p></li>
                <li><p className="sz"><span>54</span></p></li>
                <li><p className="ts"><WarningOutlined style={{fontSize: 30,marginTop: '36%',color: 'white'}} /></p></li>
              </ul>
              <ul>
                <li><p className="zc">故障告警</p></li>
                <li><p className="sz"><span>8</span></p></li>
                <li><p className="ts"><WarningOutlined style={{fontSize: 30,marginTop: '36%',color: ' #FF4500'}} /></p></li>
              </ul>
              <ul>
                <li><p className="zc">消安告警</p></li>
                <li><p className="sz"><span>45</span></p></li>
                <li><p className="ts"><WarningOutlined style={{fontSize: 30,marginTop: '36%',color: '#ff9900'}} /></p></li>
              </ul>
              <ul>
                <li><p className="zc">自定义告警</p></li>
                <li><p className="sz"><span>28</span></p></li>
                <li><p className="ts"><WarningOutlined style={{fontSize: 30,marginTop: '36%',color: '#0000FF'}} /></p></li>
              </ul>
            </div>
            <div className="lym-log-conent-footer">
              <div className="header">
                <div className="conent">
                  <div className="p"><span>告警级别</span>&nbsp;&nbsp;<Input className="input" placeholder="请选择告警级别" addonAfter={selectAfter} style={{ width: 180 }}/></div>
                  <div className="p"><span>来源分类</span>&nbsp;&nbsp;<Input className="input" placeholder="请选择来源分类" addonAfter={selectAfter} style={{ width: 180 }}/></div>
                  <div className="p"><span>业务类别</span>&nbsp;&nbsp;<Input className="input" placeholder="请选择业务类别" addonAfter={selectAfter} style={{ width: 180 }}/></div>
                  <div className="p"><span>子系统</span>&nbsp;&nbsp;<Input className="input" placeholder="请选择子系统" addonAfter={selectAfter} style={{ width: 180 }}/></div>
                  <div className="p"><span>设备名称</span>&nbsp;&nbsp;<Input className="input" placeholder="请选择设备名称" addonAfter={selectAfter} style={{ width: 180 }}/></div>
                  <Button>导出表格</Button>
                  <Button>重置</Button>
                  <Button>查询</Button>
                </div>
              </div>
              <div className="lym-log-conent-footer-bottom">
                <div className="table-light">
                  <Table className="table" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                </div>
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                <Pagination className="pagination" size="small" total={30} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
