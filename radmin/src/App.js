import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'

import { Frame } from './components'

const menus = adminRoutes.filter(route => route.isNav === true)

class App extends Component {
  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   console.log(token)
  // }
  render() {
    return (
      <Frame menus={menus}>
        <Switch>
          {
            adminRoutes.map(route => {
              if (route.children) {
                return route.children.map(route => {
                  return (
                    <Route
                    key={route.pathname}
                    path={route.pathname}
                    exact={route.exact}
                    render={(routerProps) => {
                      return <route.component {...routerProps} />
                    }}
                  />
                  )
                })
              }else {
                return (
                  <Route
                    key={route.pathname}
                    path={route.pathname}
                    exact={route.exact}
                    render={(routerProps) => {
                      return <route.component {...routerProps} />
                    }}
                  />
                )
              }
            })
          }
          <Redirect to="/admin/Echarts" from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </Frame>
    )
  }
}

export default App