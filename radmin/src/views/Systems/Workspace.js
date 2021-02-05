// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
// 空间管理页面
import React, { Component } from 'react'
import {
  Breadcrumb,
  Tree,
  Table,
  Dropdown,
  Menu,
  Badge,
  Modal,
  Button,
  TreeSelect,
  message,
  Input,
  Form
} from 'antd'
import './Workspace.less'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const { TreeNode } = TreeSelect;
// eslint-disable-next-line react-hooks/rules-of-hooks
// eslint-disable-next-line no-unused-vars
// const [ feom ] = Form.useForm();

// 树形控件
const treeData=[
  {
    title: 'Root',
    key: '0',
    children: [
      {
        title: '山东省',
        key: '1',
        children: [
          {
            title: '济南市',
            key: '1-1',
          }
        ],
      },
      {
        title: '天津',
        key: '2',
        children: [
          {
            title: '办公区',
            key: '2-1',
          },
        ],
      },
      {
        title: '广州',
        key: '3',
        children: [
          {
            title: '培训室',
            key: '3-1',
          },
          {
            title: '总经理办公室',
            key: '3-2',
          },
          {
            title: '会议室',
            key: '3-3',
          },
          {
            title: '公共区域',
            key: '3-4',
          },
        ],
      },
      {
        title: '北京',
        key: '4'
      },
    ],
  },
]

// 表格数据
const data = [
  {
    key: '1',
    number: '5a8bb97d-e078-4be8-9583-440396d3a0fe',
    name: '济南市',
    distribution: '琪琪',
    operation: '操作',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  }
];

class Workspace extends Component {
  // Modal选框事件
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
  // 确定
  handleOk = (e) => {
    console.log(e.form)
  }
  // 取消
  handleCancel = (e) => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    })
  }
  // 树控件
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  // 操作下面菜单的点击事件
  menu = (
    <Menu>
      <Menu.Item onClick={this.showModal}>
        <Badge>
          设置区域
        </Badge>
      </Menu.Item>
    </Menu>
  );
  
  // tree列表上右键事件
  treeNodeonRightClick = e => {
    this.setState({
      display: 'block',
      rightClickNodeTreeItem: {
        pageX: e.event.pageX,
        pageY: e.event.pageY,
        id: e.node.key,
        categoryName: e.node.title,
      },
    });
    let node = e.node;
    let id = Number(e.node.key);
    this.delete(node, id)
    // console.log( e.node.key , e.node.title)
  };
  //删除节点
  delete = (node, id) => {
    // console.log(node, id)
    // const children = node.children || node;
    // const index = children.map(item => item.key)
    // console.log(index)
    if (node.children && node.children.length !== 0) {
      message.error("此节点有子级，不可删除！")
      return false
    } else {
      //新增节点可直接删除，已存在的节点要二次确认
      //删除操作
      const  DelFun = () => {
        const list = node.children || node;//节点同级数据  
        const arr = new Array(list);
        // console.log(list);
        const index = Object.values(list).indexOf(node.key);
        console.log(index)
        // const index = arr.map((c) => c.key).indexOf(node.key);
        arr.splice(index, 1);
        if (index === 0) {
          message.success("删除成功！")
        }
      }
      //二次确认
      // let ConfirmFun = () => {
        // Modal.confirm("是否删除此节点？","提示",{
        //   confirmButtonText: "确认",
        //   cancelButtonText: "取消",
        //   type: "warning"
        // }).then(() => {
        //   DelFun()
        // }).catch(() => {})
      // }
      // 判断是否是新增节点
      // id > this.non_maxexpandId ? DelFun() : ConfirmFun()
      DelFun()
    }
  }
  // 添加节点
  NodeAdd(node, id){
    console.log(node, id)
  }
  // 点击取消隐藏
  hideRight = e => {
    this.setState({
      display: 'none',
    });
  };
  // 自定义右键菜单内容
  getNodeTreeRightClickMenu = () => {
    // alert(33)
    const { pageX, pageY} = { ...this.state.rightClickNodeTreeItem };
    // console.log("右键菜单id:",id);
    const tmpStyle = {
      position: 'absolute',
      left: `${pageX + 40}px`,
      top: `${pageY - 12}px`,
      display: this.state.display,
    };
    // 鼠标点击右键菜单
    const menus = (
      <Menu style={tmpStyle} onMouseLeave={this.hideRight}>
        <Menu.Item onClick={this.showModal}>
          <Badge>
            添加子节点
          </Badge>
        </Menu.Item>
        <Menu.Item onClick={this.showModal}>
          <Badge>
            编辑子节点
          </Badge>
        </Menu.Item>
        <Menu.Item onClick={this.delete}>
          <Badge>
            删除节点
          </Badge>
        </Menu.Item>
      </Menu>
    );
    return this.state.rightClickNodeTreeItem == null ? '' : menus;
  };
  // 树选择
  state = {
    value: undefined,
  };
  onChange = value => {
    // console.log(value);
    this.setState({ value });
  };
  render() {
    const columns = [
      {
        title: '编号',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '分配区域',
        dataIndex: 'distribution',
        key: 'distribution',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render:() => {
          return <Dropdown overlay={this.menu} trigger={['click']}>
            <div>
              菜单
            </div>
          </Dropdown>
        }
      }
    ];
    return (
      <>
        <div className="lym-workspace">
        <Modal
          title="添加子节点到()"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" style={{backgroundColor: '#ff9900'}} onClick={this.handleOk}>ok</Button>
          ]}
        >  
          <Form {...layout} from={this.from}>
            <Form.Item>
              <Input placeholder="请输入名称" style={{width: '100%'}}/>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="添加节点编辑节点"
          // visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          footer={[
            <Button key="back" onClick={this.hideModal}>Cancel</Button>,
            <Button key="submit" style={{backgroundColor: '#ff9900'}} onClick={this.hideModal}>ok</Button>
          ]}
        >
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            value={this.state.value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            allowClear
            onChange={this.onChange}
          >
            <TreeNode value="1" title="山东省">
              <TreeNode value="1-0" title="济南市"/>
            </TreeNode>
            <TreeNode value="2" title="天津">
              <TreeNode value="2-0" title="办公室"/>
            </TreeNode>
            <TreeNode value="3" title="广州">
              <TreeNode value="3-1" title="培训室"/>
              <TreeNode value="3-2" title="总经理办公室"/>
              <TreeNode value="3-3" title="会议室"/>
              <TreeNode value="3-4" title="公共区域"/>
            </TreeNode>
            <TreeNode value="4" title="北京"/>
          </TreeSelect>
        </Modal>
          {/* 头部 */}
          <div className="lym-workspace-header">
            <Breadcrumb>
              <Breadcrumb.Item>系统管理</Breadcrumb.Item>
              <Breadcrumb.Item>空间管理</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* 内容部份 */}
          <div className="lym-workspace-content">
            <div className="lym-workspace-content-left">
              <Tree
                onSelect={this.onSelect}
                style={{padding: '8%'}}
                treeData={treeData}
                onRightClick={this.treeNodeonRightClick}
              >
              </Tree>
              {this.getNodeTreeRightClickMenu()}
            </div>
            <div className="lym-workspace-content-right">
              <Table 
                className="table" 
                dataSource={data} 
                columns={columns} 
                expandable={{
                  expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                  rowExpandable: record => record.name !== 'Not Expandable',
                }}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Workspace