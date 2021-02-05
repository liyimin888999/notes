// @ts-nocheck
import React, { Component } from 'react'
import { 
  Layout, 
  Menu, 
  Dropdown, 
  Badge
} from 'antd';
import { withRouter } from 'react-router-dom'
import { AppstoreOutlined } from '@ant-design/icons';
import logo from './logo.png'
import ren from './ren.png'
import './frame.less'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
@withRouter

class Frame extends Component {
  onMenuClick = ({ key }) => {
    this.props.history.push(key)
  }
  onDropdownMenuClick = ({ key }) => {
    this.props.history.push(key)
  }
  menu = (
    <Menu onClick={this.onDropdownMenuClick}>
      <Menu.Item>
        <Badge>
          通知中心
        </Badge>
      </Menu.Item>
      <Menu.Item>
        <Badge>
          个人设置
        </Badge>
      </Menu.Item>
      <Menu.Item key="/login">
        <Badge>
          退出登录
        </Badge>
      </Menu.Item>
    </Menu>
  );
  render() {
    const selectedKeysArr = this.props.location.pathname.split('/')
    selectedKeysArr.length = 4
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{backgroundColor: 'rgb(50,50,50)'}}>
          <div className="logo lym-logo">
            <img src={logo} alt="TESLARIA"/>
            <p>TESLARIA</p>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            className="menu"
            defaultSelectedKeys={[selectedKeysArr.slice(0,4).join('/')]}
            defaultOpenKeys={[selectedKeysArr.slice(0,3).join('/')]}
            onClick={this.onMenuClick}
            style={{ backgroundColor: 'rgb(50,50,50)',marginTop: 20 , color: 'white'}}
          > 
            {
              this.props.menus.map(item => {
                if (item.children) {
                  return <SubMenu icon={<AppstoreOutlined />} key={item.pathname} title={item.title} style={{color: 'white'}}>
                    {
                      item.children.map(childItem => 
                        <Menu.Item key={childItem.pathname} style={{color: 'white'}}>{childItem.title}</Menu.Item>
                      )
                    }
                  </SubMenu>
                } else {
                return <Menu.Item icon={<AppstoreOutlined />} key={item.pathname} style={{color: 'white'}}>{item.title}</Menu.Item>
                }
              })
            }
        </Menu>
      </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, backgroundColor: 'black' }}>
            <div className="lym-header-logo">
              <img src={ren} alt="REN"/>
              <Dropdown overlay={this.menu}>
                <div style={{color: 'white',float: 'left',fontSize: 18}}>
                  TESLARIA
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content style={{backgroundColor: '#dedede'}}>
            <div className="site-layout-background">
            {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

// export default withRouter(Frame) 
export default Frame
