// 会议预约页面
import React, { Component } from 'react'
import { Breadcrumb, 
  Button,
  Input, 
  Table, 
  Modal, 
  Form, 
  Select, 
  DatePicker,
  TimePicker
} from 'antd'
import './Order.less'

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

export default class Order extends Component {
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
        <div className="lym-order">
          {/* 头部 */}
          <div className="lym-order-header">
            <Breadcrumb>
              <Breadcrumb.Item>主页</Breadcrumb.Item>
              <Breadcrumb.Item>会议预约</Breadcrumb.Item>
              <Breadcrumb.Item>会议预约</Breadcrumb.Item>
            </Breadcrumb>
            <Button className="btn2">列表模式</Button>
            <Button className="btn1">图像模式</Button>
          </div>
          {/* 主体内容部份 */}
          <div className="lym-order-content">
            <Modal
              title="添加预约"
              visible={this.state.visible}
              onOk={this.hideModal}
              onCancel={this.hideModal}
              footer={[
                <Button key="back" onClick={this.hideModal}>Cancel</Button>,
                <Button key="submit" style={{backgroundColor: '#ff9900'}} onClick={this.hideModal}>ok</Button>
              ]}
            >
              <Form {...layout}>
                <Form.Item name="note" label="会议主题">
                  <Input placeholder="会议主题:" />
                </Form.Item>
                <Form.Item name="gender" label="参加人员">
                  <Select placeholder="Plesae select">
                    <Option value="male">Leo</Option>
                    <Option value="female">Nick</Option>
                    <Option value="other">Allo</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="gender" label="会议室">
                  <Select>
                    <Option value="male">会议室1</Option>
                    <Option value="female">会议室2</Option>
                    <Option value="other">会议室3</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="gender" label="普通">
                  <Select placeholder="普通">
                    <Option value="male">普通</Option>
                    <Option value="female">重要</Option>
                    <Option value="other">非常重要</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="日期">
                  <DatePicker />
                </Form.Item>
                <Form.Item name="time-picker" label="开始时间" >
                  <TimePicker />
                </Form.Item>
                <Form.Item name="time-picker" label="结束时间" >
                  <TimePicker />
                </Form.Item>
                <Form.Item name="note" label="备注">
                  <Input placeholder="备注" />
                </Form.Item>
              </Form>
            </Modal>
            <div className="lym-order-content-header">
              <Button className="btn" onClick={this.showModal}>添加</Button>
              <div className="right">
                <Search className="search" placeholder="搜索" onSearch={onSearch} />
              </div>
            </div>
            <div className="lym-order-content-footer">
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
