//日程自动化页面
import React, { Component } from 'react'
import { BorderOuterOutlined } from '@ant-design/icons';
import { 
  Breadcrumb, 
  Button, 
  Card, 
  Switch,
  Modal,
  Input,
  Form,
  Select,
  DatePicker
} from 'antd';
import './Schedule.less'

const { Option } = Select;
const { RangePicker } = DatePicker;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
}
export default class Schedule extends Component {
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
        <div className="lym-Schedule">
          {/* 头部 */}
          <div className="lym-Schedule-header">
          <Breadcrumb>
            <Breadcrumb.Item>空间应用</Breadcrumb.Item>
            <Breadcrumb.Item>日程自动化</Breadcrumb.Item>
          </Breadcrumb>
          <Button className="btn2">列表模式</Button>
          <Button className="btn1">图像模式</Button>
          </div>
          {/* 内容部份 */}
          <div className="lym-Schedule-conent">
            <Button className="btn3" onClick={this.showModal}>添加</Button>
            <Modal
              title="系统场景"
              visible={this.state.visible}
              onOk={this.hideModal}
              onCancel={this.hideModal}
              footer={[
                <Button key="back" onClick={this.hideModal}>Cancel</Button>,
                <Button key="submit" style={{backgroundColor: '#ff9900'}} onClick={this.hideModal}>ok</Button>
              ]}
            >
              <Form {...layout}>
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
                <Form.Item name="range-picker" label="时间">
                  <RangePicker />
                </Form.Item>
                <Form.Item name="note" label="是否启用">
                  <Input/>
                </Form.Item>
              </Form>
            </Modal>
            <Card className="sched">
              <div className="sched-ul">
                <ul className="px">
                  <li className="l1">
                    <p>A小组培训</p>
                  </li>
                  <li className="l2"><BorderOuterOutlined style={{fontSize: 35,color: '#ff9900'}}/></li>
                  <li className="l3">
                    <p><span>星期一，</span><span>星期二，</span><span>星期三，&nbsp;&nbsp;&nbsp;</span><br></br><span>星期四，</span><span>星期五</span></p>
                    <p>09:00-12:00</p>
                  </li>
                  <li className="l4">
                    <p className="p1">已启用</p>
                    <Switch className="switch" defaultChecked/>
                  </li>
                </ul>
                <ul className="px">
                  <li className="l1">
                    <p>A小组培训</p>
                  </li>
                  <li className="l2"><BorderOuterOutlined style={{fontSize: 35,color: '#ff9900'}}/></li>
                  <li className="l3">
                    <p><span>星期一，</span><span>星期二，</span><span>星期三，&nbsp;&nbsp;&nbsp;</span><br></br><span>星期四，</span><span>星期五</span></p>
                    <p>09:00-12:00</p>
                  </li>
                  <li className="l4">
                    <p className="p1">已启用</p>
                    <Switch className="switch" defaultChecked/>
                  </li>
                </ul>
                <ul className="px">
                  <li className="l1">
                    <p>A小组培训</p>
                  </li>
                  <li className="l2"><BorderOuterOutlined style={{fontSize: 35,color: '#ff9900'}}/></li>
                  <li className="l3">
                    <p><span>星期一，</span><span>星期二，</span><span>星期三，&nbsp;&nbsp;&nbsp;</span><br></br><span>星期四，</span><span>星期五</span></p>
                    <p>09:00-12:00</p>
                  </li>
                  <li className="l4">
                    <p className="p1">已启用</p>
                    <Switch className="switch" defaultChecked/>
                  </li>
                </ul>
                <ul className="px">
                  <li className="l1">
                    <p>A小组培训</p>
                  </li>
                  <li className="l2"><BorderOuterOutlined style={{fontSize: 35,color: '#ff9900'}}/></li>
                  <li className="l3">
                    <p><span>星期一，</span><span>星期二，</span><span>星期三，&nbsp;&nbsp;&nbsp;</span><br></br><span>星期四，</span><span>星期五</span></p>
                    <p>09:00-12:00</p>
                  </li>
                  <li className="l4">
                    <p className="p1">已启用</p>
                    <Switch className="switch" defaultChecked/>
                  </li>
                </ul>
                <ul className="px">
                  <li className="l1">
                    <p>A小组培训</p>
                  </li>
                  <li className="l2"><BorderOuterOutlined style={{fontSize: 35,color: '#ff9900'}}/></li>
                  <li className="l3">
                    <p><span>星期一，</span><span>星期二，</span><span>星期三，&nbsp;&nbsp;&nbsp;</span><br></br><span>星期四，</span><span>星期五</span></p>
                    <p>09:00-12:00</p>
                  </li>
                  <li className="l4">
                    <p className="p1">已启用</p>
                    <Switch className="switch" defaultChecked/>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </>
    )
  }
}
