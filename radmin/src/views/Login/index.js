// @ts-nocheck
//登录页面
import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Wrod from './Word.png'
import { loginRequest } from '../../requests'
// import TV from './TV.png'
import Background from './TV.png';
import './index.less'

const sectionStyle = {
  // width: "50%",
  // height: "100%",
  backgroundImage: `url(${Background})` 
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default class Login extends Component {
  // 登录事件
  onFinish = (values) => {
    // 登录需要的参数
    let userLogin = {
      userName: values.userName,
      password: values.password
    }
    loginRequest(userLogin).then(resp => {
      const token = resp.token
      localStorage.setItem("token", token)
      this.props.history.push('/admin')
      console.log(this.props.history.push('/admin'))
    })
  };
  
  render() {
    return (
      <>
        <div className="lym-login">
          <div className="lym-login-left">
            <img src={Wrod} alt="WROD"/>
          </div>
          <div className="lym-login-right" style={sectionStyle}>
            {/* <img src={TV} alt="TV"/> */}
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              style={{margin: '20% 0'}}
            >
              <Form.Item
                label="用户名"
                name="userName"
                rules={[
                  {
                    message: '请输入你的用户名!',
                  },
                ]}
              >
                <Input placeholder="ID" style={{width: '40%',textAlign: 'center'}}/>
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    message: '请输入你的密码!',
                  },
                ]}
              >
                <Input.Password placeholder="Password" style={{width: '40%'}}/>
              </Form.Item>
              <Form.Item {...tailLayout} name="remember" valuePropName="checked" >
                <Checkbox style={{margin:'0 15%'}}>记住我</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" style={{margin:'0 5%',width: '30%',border: '1px solid #dedede'}}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    )
  }
}
