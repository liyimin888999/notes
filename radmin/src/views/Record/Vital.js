// 会议统计页面
import React, { Component, createRef } from 'react'
import { Breadcrumb, Card } from 'antd'
import echarts from 'echarts'
import './Vital.less'

export default class Vital extends Component {
  constructor() {
    super() 
    this.volumeChart = createRef()
    this.twoChart = createRef()
    this.threeChart = createRef()
    this.fourChart = createRef()
    this.fiveChart = createRef()
    this.volume = null
    this.two = null
    this.three = null
    this.four = null
    this.five = null
  }
  //会议室使用次数柱状图 
  initChart = () => {
    this.volume = echarts.init(this.volumeChart.current)
    const option = {
      title: {
        text: '会议室使用次数',
        left: 'center'
      },
      color: ['#ff9900'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {      // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'  // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['2020/10/4', '2020/10/5', '2020/10/6', '2020/10/7', '2020/10/8', '2020/10/9', '2020/10/10'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: [
          {
              name: '直接访问',
              type: 'bar',
              barWidth: '40%',
              data: [16, 6, 10, 0, 13, 8, 26]
          }
      ]
    };
    this.volume.setOption(option)
  }
  // 会议室使用时长柱状图
  timeChart = () => {
    this.two = echarts.init(this.twoChart.current)
    const option = {
      title: {
        text: '会议室使用时长',
        left: 'center'
      },
      color: ['#ff9900'],
      tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              data: ['2020/10/4', '2020/10/5', '2020/10/6', '2020/10/7', '2020/10/8', '2020/10/9', '2020/10/10'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: [
          {
              name: '直接访问',
              type: 'bar',
              barWidth: '40%',
              data: [11, 6, 8, 0, 13, 7, 16]
          }
      ]
    };
    this.two.setOption(option)
  }
  // 使用频率排名柱状图
  rateChart = () => {
    this.three = echarts.init(this.threeChart.current)
    const option = {
      title: {
        text: '使用频率排名',
        left: 'center'
      },
      // dataset: {
      //   source: [
      //     ['会议室', 2, 'Matcha Latte',],
      //     ['培训室', 4, 'Milk Tea'],
      //     ['总经理办公室', 12, 'Cheese Cocoa'],
      //     ['办公室', 17, 'Cheese Brownie'],
      //   ]
      // },
      grid: {containLabel: false},
      xAxis: {name: 'amount',show: false},
      yAxis: {type: 'category',show: false},
      series: [
        {
          type: 'bar',
          barMaxWidth: '30%',
          name:'',
          itemStyle : {
            normal: {
              color: function(params) {
                var colorList = [
                  '#ee4065','#2196f4','#6ccc00','#f9cb00'
                ];
                return colorList[params.dataIndex]
              },
              label : {
                show: true,
                position: 'left'
              }
            },
            emphasis:{
              label : {
                show: true,
                textStyle:{
                  fontSize:12
                }
              }
            }
          },
          data:[2,4,12,17] 
        }
      ]
    };
    this.three.setOption(option)
  }
  // 参会人数与未到人数折线图
  brokenChart = () => {
    this.four = echarts.init(this.fourChart.current)
    const option = {
      title: {
        text: '参会人数与未到人数',
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: ['2020/11/4', '2020/11/5', '2020/11/6', '2020/11/7', '2020/11/8', '2020/11/9', '2020/11/10']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [6, 11, 15, 24, 18, 12, 8],
        type: 'line'
      },{
        data: [7, 7, 16, 8, 17, 18, 9],
        type: 'line'
      }]
    };
    this.four.setOption(option)
  }
  // 会议时长排名柱状图
  rankChart = () => {
    this.five = echarts.init(this.fiveChart.current)
    const option = {
      title: {
        text: '会议时长排名',
        left: 'center'
      },
      // dataset: {
      //   source: [
      //     ['会议室', 2, 'Matcha Latte',],
      //     ['培训室', 4, 'Milk Tea'],
      //     ['总经理办公室', 12, 'Cheese Cocoa'],
      //     ['办公室', 17, 'Cheese Brownie'],
      //   ]
      // },
      grid: {containLabel: false},
      xAxis: {name: 'amount',show: false},
      yAxis: {type: 'category',show: false},
      series: [
        {
          type: 'bar',
          barMaxWidth: '30%',
          name:'',
          itemStyle : {
            normal: {
              color: function(params) {
                var colorList = [
                  '#ee4065','#2196f4','#6ccc00','#f9cb00'
                ];
                return colorList[params.dataIndex]
              },
              label : {
                show: true,
                position: 'left'
              }
            },
            emphasis:{
              label : {
                show: true,
                textStyle:{
                  fontSize:12
                }
              }
            }
          },
          data:[2,4,12,17] 
        }
      ]
    };
    this.five.setOption(option)
  }
  componentDidMount() {
    this.initChart()
    this.timeChart()
    this.rateChart()
    this.brokenChart()
    this.rankChart()
  }
  render() {
    return (
      <>
        <div className="lym-vital">
          {/* 头部 */}
          <div className="lym-vital-header">
            <Breadcrumb>
              <Breadcrumb.Item>运营数据</Breadcrumb.Item>
              <Breadcrumb.Item>会议统计</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* 内容部份 */}
          <div className="lym-vital-conent">
            <div className="lym-vital-conent-header">
              <div className="li">
                <div className="bar" ref={this.volumeChart}></div>
              </div>
              <div className="li">
                <div className="time" ref={this.twoChart}></div>
              </div>
              <div className="li">
                <div className="rate" ref={this.threeChart}>
                </div>
              </div>
            </div>
            <div className="lym-vital-conent-footer">
              <Card className="left">
                <div ref={this.fourChart}></div>
              </Card>
              <Card className="right">
                <div ref={this.fiveChart}></div>
              </Card>
            </div>
          </div>
        </div>
      </>
    )
  }
}
