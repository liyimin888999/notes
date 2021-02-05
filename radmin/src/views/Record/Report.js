// 会议报表页面
import React, { Component, createRef } from 'react'
import { 
  Breadcrumb, 
  Button, 
  Input 
} from 'antd'
import './Report.less'
import echarts from 'echarts'

const { Search } = Input;
const onSearch = value => console.log(value);

export default class Report extends Component {
  constructor() {
    super() 
    this.volumeChart = createRef()
    this.followChart = createRef()
    this.articleChart = createRef()
    this.fourChart = createRef()
    this.volume = null
    this.follow = null
    this.article = null
    this.four = null
  }
  // 会议成功率饼图
  initChart = () => {
    this.volume = echarts.init(this.volumeChart.current)
    const option = {
      title: {
        text: '会议成功率',
        left: 'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: "{a}:{b}:({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: '37.5%',
          y: '90%',
          data:['成功','取消']
      },
      series: [
        {
          name:'访问来源',
          type:'pie',
          selectedMode: 'single',
          radius: [0, '70%'],
          label: {
            normal: {
              formatter: '{d}%',
              position: 'inner'
            }
          },
          data:[
            {
              value:70,
              name:'成功',
              itemStyle:{
                normal:{
                  color:'#ff9900'
                }
              }
            },
            {
              value:30,
              name:'取消',
              itemStyle:{
                normal:{
                  color:'#0000FF'
                }
              }
            }
          ]
        }
      ]
    }
    this.volume.setOption(option)
  }
  // 会议室利用率饼图
  outputChart = () => {
    this.follow = echarts.init(this.followChart.current)
    const option = {
      title: {
        text: '会议室利用率',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a}:{b}:({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: '20%',
        y: '90%',
        data:['会议室1','培训室1','会议室2','培训室2']
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '70%'],
              label: {
                normal: {
                  formatter: '{d}%',
                  position: 'inner'
                }
              },
              data:[
                {
                  value:60,
                  name:'会议室1',
                  itemStyle:{
                    normal:{
                      color:'#0000FF'
                    }
                  }
                },
                {
                  value:20,
                  name:'培训室1',
                  itemStyle:{
                    normal:{
                      color:'#FF7F24'
                    }
                  }
                },
                {
                  value:10,
                  name:'会议室2',
                  itemStyle:{
                    normal:{
                      color:'#dedede'
                    }
                  }
                },
                {
                  value:10,
                  name:'培训室2',
                  itemStyle:{
                    normal:{
                      color:'#ff9900'
                    }
                  }
                }
              ]
          }
      ]
    }
    this.follow.setOption(option)
  }
  // 会议开始时间趋势折线图
  shebChart = () => {
    this.article = echarts.init(this.articleChart.current)
    const option = {
      title: {
        text: '会议开始时间趋势',
        left: 'center'
      },
      color: '#ff9900',
      xAxis: {
        type: 'category',
        data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00','14:00', '16:00', '18:00', '20:00', '22:00']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [0,0,0,0,20,12,30,15,8,11,9,8,7,6,5,4,3,2,1],
        type: 'line',
        smooth: true
      }]
    };  
    this.article.setOption(option)
  }
  // 会议时长趋势折线图
  brokenChart = () => {
    this.four = echarts.init(this.fourChart.current)
    const option = {
      title: {
        text: '会议时长趋势',
        left: 'center'
      },
      color: '#ff9900',
      xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [10, 4, 8, 12.1, 10, 4, 3],
        type: 'line'
      }]
    }
    this.four.setOption(option)
  }
  componentDidMount() {
    this.initChart()
    this.outputChart()
    this.shebChart()
    this.brokenChart()
  }
  render() {
    return (
      <>
        <div className="lym-report">
          {/* 头部 */}
          <div className="lym-report-header">
            <Breadcrumb>
              <Breadcrumb.Item>运营数据</Breadcrumb.Item>
              <Breadcrumb.Item>会议统计</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="lym-report-conent">
            <div className="lym-report-conent-header">
              <Button className="btn1">全部会议室</Button>
              <Button className="btn2">单个会议室</Button>
              <div className="conent">
                <p><span className="s1">本周</span><span className="s2">本月</span><span className="s3">本年</span><Search placeholder="2020-11-10" onSearch={onSearch} style={{ width: 200 }} />
                <span className="s4">当日</span><span className="s5">2020-11-08&nbsp;00:00:00&nbsp;至2020-11-14&nbsp;23:58:26</span></p>
              </div>
              <Button className="btn4">统计</Button>
              <Button className="btn3">导出</Button>
            </div>
            <div className="lym-report-conent-footer">
              <div className="left">
                <ul>
                  <li>会议室总数</li>
                  <li><p>4</p></li>
                </ul>
                <ul>
                  <li>会议总数</li>
                  <li><p>8</p></li>
                </ul>
                <ul>
                  <li>会议时长总计</li>
                  <li><p>32</p></li>
                </ul>
              </div>
              <div className="middle">
                <ul>
                  <li className="success" ref={this.volumeChart}></li>
                </ul>
                <ul>
                  <li className="output" ref={this.followChart}></li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li ref={this.articleChart}></li>
                </ul>
                <ul>
                  <li ref={this.fourChart}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
