//可视化呈现页面
import React, { Component,createRef } from 'react'
import { FundOutlined, BulbOutlined } from '@ant-design/icons'
// import streamedian from 'streamedian'
import { 
  Card, 
  Button, 
  Select, 
  Table 
} from 'antd'
import echarts from 'echarts'
import './index.less'

const { Option } = Select;

//指定表格的数据源
const dataSource = [
  // {
  //   key: '1',
  //   name: '投影机',
  //   age: '开',
  //   address: '在线',
  // },
  {
    key: '2',
    name: '投影机',
    age: '开',
    address: '在线',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
export default class Echarts extends Component {
  constructor() {
    super () 
    this.volumeChart = createRef()
    this.twoChart = createRef()
    this.volume = null
    this.two = null
  }
  // CPU温度折线图
  initChart = () => {
    this.volume = echarts.init(this.volumeChart.current)
    const option = {
      color: '#ff9900',
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['', '', '', '', '', '', ''],
          show: false
          
      },
      yAxis: {
          type: 'value',
          show: false
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
      }]
    };
    this.volume.setOption(option)
  }
  // CPU使用率折线图
  syChart = () => {
    this.two = echarts.init(this.twoChart.current)
    const option = {
      color: '#1E90FF',
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['', '', '', '', '', '', ''],
          show: false
          
      },
      yAxis: {
          type: 'value',
          show: false
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
      }]
    };
    this.two.setOption(option)
  }
  componentDidMount() {
    this.initChart()
    this.syChart()
  }
  handle =(e) => { 
    if ( e.currentTarget.style.backgroundColor === '') {
      e.currentTarget.style.backgroundColor = '#ff9900'; 
    } else {
      e.currentTarget.style.backgroundColor = ''
    }
  }
  render() {
    return (
      <>
        <div className="lym-echarts">
          {/* 头部 */}
          <div className="lym-echarts-header"></div>
          {/* 内容 */}
          <div className="lym-echarts-content">
            {/* 内容左边模块 */}
            <div className="lym-echarts-content-left">
              <p className="p1">智慧场景</p>
              <Button className="btn">
                <div className="date choose" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                  <p>培训模式</p>
                  <p>Training mode</p>
                </div>
              </Button>
              <Button className="btn">
                <div className="date" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                <p>视频会议</p>
                <p>Video Conference</p>
                </div>
              </Button>
              <Button className="btn">
                <div className="date" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                <p>接待模式</p>
                <p>Reception Mode</p>
                </div>
              </Button>
              <Button className="btn">
                <div className="date" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                <p>洽谈模式</p>
                <p>Negotiation Mode</p>
                </div>
              </Button>
              <Button className="btn">
                <div className="date" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                  <p>音乐模式</p>
                  <p>Music Mode</p>
                </div>
              </Button>
              <Button className="btn">
                <div className="date" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                  <p>内部培训</p>
                  <p>Training mode</p>
                </div>
              </Button>
              <Button className="btn">
                <div className="date" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                  <p>会议结束</p>
                  <p>Break Up</p>
                </div>
              </Button>
              <Button className="btn">
                <div className="date" onClick={this.handle}><FundOutlined style={{fontSize: 40,margin:'25%',color:'white'}}/></div>
                <div className="train">
                  <p>会间休息</p>
                  <p>Rest Mode</p>
                </div>
              </Button>
            </div>
            {/* 内容中间模块 */}
            <div className="lym-echarts-content-conent">
              <Card className="lym-echarts-content-conent-header" style={{padding: 0,marginBottom: 20}}>
                <p>视频观察</p>
                <Card className="btn">
                  <Button>通道1</Button>
                  <Button>通道2</Button>
                  <Button>通道3</Button>
                </Card>
                <Card className="img">
                  {/* <video 
                    controls="controls" 
                    loop="loop" 
                    muted="muted" 
                    autoplay="autoplay" 
                    style={{objectFit: "fill", width: '100%',height:'490px',float: "left",outline: 'none'}} src={require('./28-6.mp4').default}
                  >
                  </video> */}
                  {/* <object type='application/x-vlc-plugin' pluginspage="http://www.videolan.org/" id='vlc' events='false' width="100%" height="490">
                    <param name='mrl' value='rtsp://admin:DOCOII@192.168.0.200:554/h264/ch1/main/av_stream' />
                    <param name='volume' value='50' />
                    <param name='autoplay' value='true' />
                    <param name='loop' value='false' />
                    <param name='fullscreen' value='false' />
                    <param name='controls' value='false' />
                  </object> */}
                  <video 
                    id="video" 
                    controls 
                    // autoplay 
                    src="rtsp://admin:DOCOII@192.168.0.200:554/h264/ch1/main/av_stream"
                    style={{objectFit: "fill", width: '100%',height:'490px',float: "left",outline: 'none'}}
                  >
                  </video>
                </Card>
              </Card>
              <Card className="lym-echarts-content-conent-footer" style={{padding: 0 }}>
                <div className="monitor">
                  <p>主机监控</p>
                  <Select className="select" defaultValue="协同服务器1">
                    <Option value="Option1">协同服务器1</Option>
                    <Option value="Option2">协同服务器2</Option>
                  </Select>
                </div>
                <div className="footer">
                  <Card title="设备信息" className="caps">
                    <p className="p1">ip地址: 192.168.1.124</p>
                    <p className="p2">MAC地址: SD-3E-S8-A8-E8-CS</p>
                  </Card>
                  <Card title="CPU温度" className="caps">
                    <p>温度：0度</p>
                    <p className="p3" ref={this.volumeChart}></p>
                  </Card>
                  <Card title="CPU使用率" className="caps">
                    <p>使用率: 0.0%</p>
                    <p className="p4" ref={this.twoChart}></p>
                  </Card>
                </div>
              </Card>
            </div>
            {/* 内容右边模块 */}
            <div className="lym-echarts-content-right">
              <Card className="lym-echarts-content-right-header">
                <div className="Science">
                  <p>环境监测</p>
                  <Select className="select1" defaultValue="办公室">
                    <Option value="Option1">办公室</Option>
                    <Option value="Option2">会议室</Option>
                  </Select>
                </div>
                <div className="footer">
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>温度</p>
                    <p>28℃</p>
                  </Button>
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>湿度度</p>
                    <p>50%</p>
                  </Button>
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>PM2.5</p>
                    <p>30ug/m³</p>
                  </Button>
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>PM10</p>
                    <p>400ppm</p>
                  </Button>
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>二氧化碳</p>
                    <p>16ppb</p>
                  </Button>
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>甲醛</p>
                    <p>0ppu</p>
                  </Button>
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>TVOC</p>
                    <p>30ug/m³</p>
                  </Button>
                  <Button className="footer-card">
                    <p><BulbOutlined style={{fontSize: 30,marginTop: '10%', color: '#ff9900'}}/></p>
                    <p>PM1.0</p>
                    <p>20ppm</p>
                  </Button>
                </div>
              </Card>
              <Card className="lym-echarts-content-right-footer">
                <div className="device">
                  <p>设备监测</p>
                  <Select className="select2" defaultValue="办公室">
                    <Option value="Option1">办公室</Option>
                    <Option value="Option2">会议室</Option>
                  </Select>
                </div>
                <Card className="bottom">
                  <Table className="table1" size={"small"} showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                  <Table className="table1" size={"small"} showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                  <Table className="table1" size={"small"} showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                  <Table className="table1" size={"small"} showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                  <Table className="table1" size={"small"} showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                  <Table className="table1" size={"small"} showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                  <Table className="table1" size={"small"} showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </>
    )
  }
}
