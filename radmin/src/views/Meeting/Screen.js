// 会议屏管理页面
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
import './Screen.less'

const { Search } = Input;
const { Option } = Select;
const onSearch = value => console.log(value);

// const { Option } = Select;
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
    name: '名称',
    age: '位置',
    address: 'MAC地址',
    state: 'IP地址',
    operation: '定时关机',
    end: '序列号',
    handle: '运行状态',
    hand: <div><Button  disabled={false} ghost={false} style={{border: 0}}>操作</Button></div>
  },
];
const dataSources = [
  {
    key: '2',
    name: '名称',
    age: '位置',
    address: 'MAC地址',
    state: 'IP地址',
    operation: '定时关机',
    end: '序列号',
    handle: '运行状态',
    hand: <div><Button style={{border: 0}}>操作</Button></div>
  },
];
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '位置',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'MAC地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'IP地址',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '定时关机',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: '序列号',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: '运行状态',
    dataIndex: 'handle',
    key: ' handle',
  },
  {
    title: '操作',
    dataIndex: 'hand',
    key: 'hand',
  }
];

export default class Screen extends Component {
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
        <div className="lym-screen">
          {/* 头部 */}
          <div className="lym-screen-header">
            <Breadcrumb>
              <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>会议预约</Breadcrumb.Item>
              <Breadcrumb.Item>会议屏管理</Breadcrumb.Item>
            </Breadcrumb>
            <Button className="btn2">列表模式</Button>
            <Button className="btn1">图像模式</Button>
          </div>
          {/* 内容部份 */}
          <div className="lym-screen-content">
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
                    <Input placeholder="会议信息发布终端" />
                  </Form.Item>
                  <Form.Item name="gender" label="位置">
                  <Select>
                    <Option value="male">北京</Option>
                    <Option value="female">上海</Option>
                    <Option value="other">广州</Option>
                  </Select>
                </Form.Item>
                  <Form.Item name="note" label="MAC地址">
                    <Input placeholder="Please select" />
                  </Form.Item>
                  <Form.Item name="note" label="Ip地址">
                    <Input placeholder="Please select" />
                  </Form.Item>
                  <Form.Item name="note" label="定时关机">
                    <Input placeholder="Please select" />
                  </Form.Item>
                  <Form.Item name="note" label="序列号">
                    <Input placeholder="Please select" />
                  </Form.Item>
                </Form>
            </Modal>
            <div className="lym-screen-content-header">
              <Button className="btn" onClick={this.showModal}>添加</Button>
              <div className="right">
                <Search className="search" placeholder="搜索" onSearch={onSearch} />
              </div>
            </div>
            <div className="lym-screen-content-footer">
              <div className="table-light">
                <Table className="table" showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
              </div>
              <Table className="table1" showHeader={false} dataSource={dataSources} columns={columns} pagination={false} />
              <Table className="table1" showHeader={false} dataSource={dataSources} columns={columns} pagination={false} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
