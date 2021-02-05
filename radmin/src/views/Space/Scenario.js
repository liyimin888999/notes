//系统场景页面
import React, { Component } from 'react'
import { FundOutlined, CheckSquareOutlined, CloseSquareOutlined } from '@ant-design/icons'
import { 
  Breadcrumb, 
  Button, 
  Card, 
  Modal,
  Form,
  Input,
  message
} from 'antd';
import { scenario } from '../../requests'
import './Scenario.less'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
}
const success = () => {
  message.success('确定要添加吗？');
};

const error  = () => {
  message.info('确定要删除吗？');
};
export default class Scenario extends Component {
  constructor() {
    super() 
    this.state = {
      grouping: []
    }
  }
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
  // 调用场景分组接口
  groups = () => {
    scenario()
      .then(resp => {
        // console.log(resp)
        this.setState({
          grouping: resp
        })
      })
  }
  componentDidMount() {
    this.groups()
  }
  render() {
    return (
      <>
        <div className="lym-Scenario">
          {/* 头部 */}
          <Breadcrumb className="lym-Scenario-header">
            <Breadcrumb.Item>空间应用</Breadcrumb.Item>
            <Breadcrumb.Item>系统场景</Breadcrumb.Item>
          </Breadcrumb>
          {/* 内容部份 */}
          <div className="lym-Scenario-conent">
            <Button className="btn" onClick={this.showModal}>添加</Button>
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
                <Form.Item name="note" label="名称">
                  <Input placeholder="请输入中文" />
                </Form.Item>
                <Form.Item name="note" label="英文名称">
                  <Input placeholder="请输入英文" />
                </Form.Item>
              </Form>
            </Modal>
            <Card className="meet">
              <div className="meet-ul">
                {/* 使用场景分组接口渲染页面 */}
                {
                  this.state.grouping.map((item, index) => {
                    return  <Button className="ul" key={index}>
                      <div className="one">
                        <p><FundOutlined style={{fontSize: 40,margin:'27% 24%',color:'white'}} /></p>
                      </div>
                      <div className="two">
                        <p><span>{item.name}</span></p>
                        <p><span>{item.imageUrl}</span></p>
                      </div>
                      <div className="three">
                        <p>
                          <CheckSquareOutlined onClick={success} style={{fontSize: 20,margin:'20% 14%',color:'white',float: 'left'}}/>
                          <CloseSquareOutlined onClick={error} style={{fontSize: 20,margin:'78% 14%',color:'white',float: 'left'}}/>
                        </p>
                      </div>
                    </Button>
                  })
                }
              </div>
            </Card>
          </div>
        </div>
      </>
    )
  }
}
