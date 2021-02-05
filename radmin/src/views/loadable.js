// 这个文件只是用于解释react-loadable原理用的,当然可以无缝切换。
import React, { Component } from 'react'

const Loadable = ({
  loader,
  loading: Loading
}) => {
  return class LoadableComponent extends Component {
    state = {
      LoadedComponent: null
    }
    componentWillMount() {
      loader()
        .then(resp => {
          this.setState({
            LoadedComponent: resp.default
          })
        })
    }
    render() {
      const {
        LoadedComponent
      } = this.state
      return (
        this.state.resp
        ?
        <LoadedComponent/>
        :
        <Loading/>
      )
    }
  }
}

export default Loadable