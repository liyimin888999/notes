// @ts-nocheck
//空间管理页面
import React, { Component } from 'react'
// import { FundOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Table , Tree  } from 'antd';
import { device, system, trees } from '../../requests'
import './Management.less'

//左边树形连接线
const treeData = [
  {
    title: '北京',
    key: '1'
  },
  {
    title: '天津',
    key: '2',
  },
  {
    title: '重庆',
    key: '3',
  },
  {
    title: '上海',
    key: '4',
  },
  {
    title: '广州',
    key: '5',
    children: [
      {
        title: '会议室',
        key: '5-1'
      },
      {
        title: '培训室',
        key: '5-2'
      },
      {
        title: '总经理办公室',
        key: '5-3'
      },
      {
        title: '公共区域',
        key: '5-4'
      }
    ]
  }
]
const DisplayMap = {
  deviceState: '运行',
}
export default class Management extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPress:true,
      dataSource: [],
      list: [],
      treeData: [],
      url: 'http://192.168.0.12:10003/host/'
    }
  }
  getData = () => {
    device()
      .then(resp => {
        const data = resp.map((item, index) => {
          return {
              key: index,
              name: item.name,
              age: 'EMC-CAM',
              onLine: item.onLine === true ? '在线' : '离线',
              deviceState: DisplayMap.deviceState,
              operation: '操作'
            }
        })
        // const columnkeys = Object.keys(resp[0])
        // console.log(columnkeys)
        // const columns = columnkeys.map(item => {
        //   // console.log(item)
        //   return {
        //     dataIndex: item,
        //     key: item,
        //   }
        // })
        this.setState({
          dataSource: data
        })
      }) 
  }
  patternData = () => {
    system()
      .then(resp => {
        this.setState({
          list: resp
        })
      })
  }
  treesData = () => {
    trees()
      .then(resp => {
        console.log(resp)
        // const datas = resp.map((item, index) => {
        //   return {
        //     title: '北京',
        //     key: '1'
        //   // eslint-disable-next-line no-sequences
        //   },
        //   {
        //     title: '天津',
        //     key: '2'
        //   },
        //   {
        //     title: '重庆',
        //     key: '1'
        //   },
        //   {
        //     title: '上海',
        //     key: '2'
        //   },
        //   {
        //     title: '广州',
        //     key: '5',
        //     children: [
        //       {
        //         title: item.name,
        //         key: '5-1'
        //       },
        //       {
        //         title: '培训室', 
        //         key: '5-2'
        //       },
        //       {
        //         title: '总经理办公室',
        //         key: '5-3'
        //       },
        //       {
        //         title: '公共区域',
        //         key: '5-4'
        //       }
        //     ]
        //   }
        // })
        // this.setState({
        //   treeData: datas
        // })
      })
  }
  componentDidMount() {
    this.getData()
    this.patternData()
    this.treesData()
  }
  
  handleClick = (index) => {
    // if (e.currentTarget.style.backgroundColor === '') {
    //   e.currentTarget.style.backgroundColor = "#ff9900"
    // } else {
    //   e.currentTarget.style.backgroundColor = ""
    // }
    this.setState({
      isPress: index
    })
  }
  // checkable = (e) => {
  //   console.log(e)
  // }
  render() {
    const  columns= [
      {
        title: '设备名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '设备型号',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '是否在线',
        dataIndex: 'onLine',
        key: 'onLine',
      },
      {
        title: '设备状态',
        dataIndex: 'deviceState',
        key: 'deviceState',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render:() => {
          return <Button>操作</Button>
        }
      },
    ]
    return (
      <>
        <div className="lym-management">
          {/* 头部 */}
          <div className="lym-management-header">
            <Breadcrumb>
              <Breadcrumb.Item>空间应用</Breadcrumb.Item>
              <Breadcrumb.Item>空间管理</Breadcrumb.Item>
              <Breadcrumb.Item>广州</Breadcrumb.Item>
              <Breadcrumb.Item>会议室</Breadcrumb.Item>
            </Breadcrumb>
            <Button className="btn2">列表模式</Button>
            <Button className="btn1">平面图模式</Button>
          </div>
          {/* 内容部份 */}
          <div className="lym-management-conent">
            <div className="lym-management-conent-left">
            <Tree
              className="tree"
              showLine
              // checkable
              // onClick={this.checkable}
              treeData={treeData}
              style={{paddingLeft: '10%'}}
            />
            </div>
            <div className="lym-management-conent-right">
              <div className="header">
                <p>场景管理</p>
              </div>
              <div className="admin"> 
                {
                  this.state.list.map((item,index) => {
                    return <Button className="btn" key={index} onClick={() => this.handleClick(index)}>
                    <div className="date" style={{backgroundColor: this.state.isPress === index ? '#ff9900' : '#999999'}}>
                      <img  src={this.state.url + item.imageUrl} alt=""/>
                    </div>
                    <div className="train">
                      <p>{item.name}</p>
                      <p>{item.subTitle}</p>
                    </div>
                  </Button>
                  })
                }
              </div>
              <div className="footer">
                <div className="footer-header">
                  <p>设备管理</p>
                </div>
                <div className="table-light">
                  <Table className="table" dataSource={this.state.dataSource} columns={columns} pagination={false} />
                </div>
                {/* <Table className="table1" showHeader={false} dataSource={this.dataSource} columns={this.columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={this.dataSources} columns={this.columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={this.dataSources} columns={this.columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={this.dataSources} columns={this.columns} pagination={false} />
                <Table className="table1" showHeader={false} dataSource={this.dataSources} columns={this.columns} pagination={false} /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
