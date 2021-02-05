// 资产管理页面
import React, { Component } from 'react'
import { AccountBookOutlined, ToolOutlined } from '@ant-design/icons';
import { 
  Breadcrumb,
  Button,
  Table,
  Input,
  Select,
  Pagination
} from 'antd'
import './Asset.less'

const { Search } = Input;
// const { Option } = Select;
const onSearch = value => console.log(value);

const selectAfter = (
  <Select className="select-after">
  </Select>
);

// 表格数据
const dataSource = [
  {
    key: '2',
    name: '类型',
    age: '设备名称',
    address: '设备型号',
    state: '品牌',
    operation: '位置',
    end: '负责人',
    handle: '联系方式',
    asset: '资产状态',
    period: '剩余保修期限'
  },
];

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
    title: '负责人',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: '联系方式',
    dataIndex: 'handle',
    key: 'handle',
  },
  {
    title: '资产状态',
    dataIndex: 'asset',
    key: 'asset',
  },
  {
    title: '剩余保修期限',
    dataIndex: 'period',
    key: 'period',
  },
];


export default class Asset extends Component {
  render() {
    return (
      <>
        <div className="lym-asset">
          {/* 头部 */}
          <div className="lym-asset-header">
            <Breadcrumb>
              <Breadcrumb.Item>运营数据</Breadcrumb.Item>
              <Breadcrumb.Item>资产管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* 内容部份 */}
          <div className="lym-asset-conent">
            <div className="lym-asset-conent-header">
              <ul>
                <li><p className="zc">资产总数</p></li>
                <li><p className="sz"><span>1280</span></p></li>
                <li><p className="ts"><AccountBookOutlined style={{fontSize: 35,marginTop: '22%',color: 'white'}}/></p></li>
              </ul>
              <ul>
                <li><p className="zc">维修数量</p></li>
                <li><p className="sz"><span>30</span></p></li>
                <li><p className="ts"><ToolOutlined  style={{fontSize: 35,marginTop: '22%',color: 'white'}}/></p></li>
              </ul>
              <ul>
                <li><p className="zc">报废数量</p></li>
                <li><p className="sz"><span>20</span></p></li>
                <li><p className="ts"><AccountBookOutlined style={{fontSize: 35,marginTop: '22%',color: 'white'}}/></p></li>
              </ul>
            </div>
            {/* 内容底部 */}
            <div className="lym-asset-conent-footer">
              <div className="header">
                <div className="conent">
                  <Button className="btn1">添加</Button>
                  <Search className="input" placeholder="位置搜索" onSearch={onSearch} style={{ width: 160}} />
                  <Search className="input" placeholder="搜索设备名称/品牌/型号" onSearch={onSearch} style={{ width: 300 }} />
                  <Input className="input" placeholder="全部产品" addonAfter={selectAfter} style={{ width: 160 }}/>
                  <Input className="input" placeholder="资产状态" addonAfter={selectAfter} style={{ width: 160 }}/>
                  <Button className="btn2">导出表格</Button>
                </div>
              </div>
              <div className="table-light">
                <Table className="table" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              </div>
              <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
            </div>
            <Pagination size="small" total={30} style={{float: 'right',marginRight: '1.5%'}}/>
          </div>
        </div>
      </>
    )
  }
}
