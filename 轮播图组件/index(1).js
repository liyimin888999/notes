import React, { Component } from 'react'

import { message } from 'antd'

class ShufflyComponent extends Component {
	state = {
		imgList: [],
		imgIndex: 1,

		// 播放时间
		moveTimes: 3000
	}

	showImgRef = React.createRef()

	componentDidMount() {
		// 父组件传过来的值[是一个对象数组(最长五个), 里面必须有img图片地址, 地址对象名: img]
		let imgList = this.props.imgList
		this.setState({
			imgList,
			width: this.props.width,
			height: this.props.height,
			moveTimes: this.props.moveTimes ? this.props.moveTimes : 3000
		})
		if(imgList < 1 || imgList.length > 5) {
			return message.warn('最多上传五张图片')
		} else {
			setTimeout(() => {
				this.imMove(imgList)
			}, 200)
		}
	}


	// 图片移动的事件
	imMove = (imgList) => {
		console.log(imgList)
		// 获取图片的宽度, 也是父组件传过来的值
		let liWidth = this.state.width
		let listLength = imgList.length
		// 当传过来的对象数据的长度大于一的时候就会触发计时器, 进行轮播
		if(imgList.length > 1) {
			// 初始时定义一个图片的下标(此下标的值等于下标加一([index+1] = imgIndex))
			let index = this.state.imgIndex
			// 定义一个定时器为imgMove
			this.imgMove = setInterval(() => {
				if(index === listLength) {
					index = 0
				}
				// 得到需要移动的距离(距离由图片容器img标签外li的宽度规定)
				let moveDistance = liWidth * index++
				// 通过ref设置移动的距离
				this.showImgRef.current.style.left = '-' + moveDistance + 'px'
				// 将定义的图片下标 设置为移动到某张图片位置的下标
				this.setState({
					imgIndex: index
				})
				// 当图片移动的距离大于等于父组件传过来的数据的长度乘以li的宽的在减一个li的宽度时就设置index = 0(重头开始)
				if(moveDistance >= listLength * liWidth - liWidth) {
					index = 0
					// 原因: 当图片移动到倒数第二张的时候, 设置其值为数组的长度, 为了使小图片导航能选中最后一张小图
					this.setState({
						imgIndex: listLength
					})
				}
			}, this.state.moveTimes)
		}
	}


	// 鼠标移入ul和ol的事件
	mouseOverImg = () => {
		clearInterval(this.imgMove)
	}


	// 鼠标移出ul和ol的事件
	mouseOutImg = () => {
		const { imgList } = this.state
		this.imMove(imgList)
	}

	clickSmallImg = (smallIndex) => {
		this.mouseOverImg()
		// li的宽度
		let liWidth = this.state.width
		// 点的那张图片, 应该移动的距离
		let shouldMoveDistance = smallIndex * liWidth - liWidth
		this.showImgRef.current.style.left = '-' + shouldMoveDistance + 'px'
		this.setState({
			imgIndex: smallIndex
		})
	}



	componentWillUnmount() {
		clearInterval(this.imgMove)
	}




	render() {
		const { imgList } = this.state
		return (
			<div className="shuffly-component-wrap">
				<div className="show-img-wrap">
					<ul
						ref={this.showImgRef}
						onMouseOver={this.mouseOverImg}
						onMouseOut={this.mouseOutImg}
						style={{
							width: this.props.width * imgList.length,
							height: this.props.height
						}}
					>
						{
							imgList.length > 0 && imgList.length< 6
							?
							imgList.map((item, index) => (
								<li key={index+1}>
									<img alt={"图片" + index+1} src={item.productPictureUrl} />
								</li>
							))
							:
							''
						}
					</ul>
				</div>
				<ol onMouseOut={this.mouseOutImg} onMouseOver={this.mouseOverImg}>
					{
						imgList.length >= 1 && imgList.length< 6
						?
						imgList.map((item, index) => (
							<li
								key={index+1}
								onClick={this.clickSmallImg.bind(this, index+1)}
								className={this.state.imgIndex === index+1 ? 'img-nav-selected' : ''}
							>
								<img alt='' src={item.productPictureUrl} />
							</li>
						))
						:
						''
					}
				</ol>
			</div>
		)
	}
}

export default ShufflyComponent
