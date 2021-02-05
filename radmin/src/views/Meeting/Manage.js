// 会议室管理页面
import React, { Component } from 'react'
import { 
  Breadcrumb, 
  Button,
  Input,
  Table,
  Modal,
  Select,
  Form 
} from 'antd'
import './Manage.less'

const { Search } = Input;
const onSearch = value => console.log(value);

const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
};

// 表格数据
const dataSource = [
  {
    key: '2',
    name: '楼层',
    age: '房间号',
    address: '名称',
    state: '配置',
    operation: '服务',
    end: '可容纳人数',
    handle: '会议室布局',
    status: '状态',
    hand:<div><Button  disabled={false} ghost={false} style={{border: 0}}>操作</Button></div>
  },
];
const dataSources = [
  {
    key: '2',
    name: '楼层',
    age: '房间号',
    address: '名称',
    state: '配置',
    operation: '服务',
    end: '可容纳人数',
    handle: '会议室布局',
    status: '状态',
    hand:<div><Button style={{border: 0}}>操作</Button></div>
  },
];
const columns = [
  {
    title: '楼层',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '房间号',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '名称',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '配置',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '服务',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: '可容纳人数',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: '会议室布局',
    dataIndex: 'handle',
    key: ' handle',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: 'hand',
    key: 'hand',
  }
];

export default class Manage extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <div className="lym-manage">
          {/* 头部 */}
          <div className="lym-manage-header">
            <Breadcrumb>
              <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>会议预约</Breadcrumb.Item>
              <Breadcrumb.Item>会议室管理</Breadcrumb.Item>
            </Breadcrumb>
            <Button className="btn2">列表模式</Button>
            <Button className="btn1">图像模式</Button>
          </div>
          {/* 内容部份 */}
          <div className="lym-manage-content">
            <Modal
                title="添加会议室"
                visible={this.state.visible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                footer={[
                  <Button key="back" onClick={this.hideModal}>Cancel</Button>,
                  <Button key="submit" style={{backgroundColor: '#ff9900'}} onClick={this.hideModal}>ok</Button>
                ]}
              >
                <Form {...layout}>
                  <Form.Item name="note" label="名称">
                    <Input />
                  </Form.Item>
                  <Form.Item name="note" label="房间号">
                    <Input />
                  </Form.Item>
                  <Form.Item name="gender" label="楼层">
                  <Select>
                    <Option value="male">楼层1</Option>
                    <Option value="female">楼层2</Option>
                    <Option value="other">楼层3</Option>
                  </Select>
                  </Form.Item>
                  <Form.Item name="note" label="配置">
                    <Input placeholder="配置" />
                  </Form.Item>
                  <Form.Item name="note" label="服务">
                    <Input placeholder="服务" />
                  </Form.Item>
                  <Form.Item name="note" label="容纳人数">
                    <Input placeholder="1" />
                  </Form.Item>
                  <Form.Item name="note" label="图片">
                    
                  </Form.Item>
                </Form>
            </Modal>
            <div className="lym-manage-content-header">
              <Button className="btn" onClick={this.showModal}>添加</Button>
              <div className="right">
                <Search className="search" placeholder="搜索" onSearch={onSearch} />
              </div>
            </div>
            <div className="lym-manage-content-footer">
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
