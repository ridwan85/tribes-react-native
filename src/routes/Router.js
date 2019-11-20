import React from 'react'
import { AsyncStorage } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../screens/Login/Login'
import UserList from '../screens/UserList/UserList'
import Register from '../screens/Register/Register'

// global.___DEV___ = false;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed']

console.disableYellowBox = true

var isLogin = false

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: 'white' }}>
      <Scene key="root">
        <Scene key="UserList" component={UserList} hideNavBar={true} />
        <Scene
          key="Login"
          component={Login}
          title="Login"
          tintColor="white"
          hideNavBar={true}
        />

        <Scene key="Register" component={Register} hideNavBar={true} />
      </Scene>
    </Router>
  )
}

export default RouterComponent
