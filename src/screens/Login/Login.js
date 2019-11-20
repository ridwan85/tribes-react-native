import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  ActivityIndicator
} from 'react-native'
import { Button } from 'native-base'
import { styles } from './LoginStyle'
import { UtilStyles } from '../../style/styles'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
import { mainEndpoint } from '../../endpoint'
import Icon from 'react-native-vector-icons/FontAwesome'

const LOGIN_API = `${mainEndpoint}/login`

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      isLogin: false,
      isError: false
    }

    this._retrieveData()
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userData')
      if (value !== null) {
        // We have data!!
        console.log(value)
        var userData = JSON.parse(value)

        console.log('userData AsyncStorage', userData.company_id)

        Actions.JobList({ companyId: userData.company_id })
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  onEmail(text) {
    this.setState({
      email: text
    })
  }

  onPass(text) {
    this.setState({
      password: text
    })
  }

  handleInput = (input_name, e) => {
    console.log(input_name, e.target.value)
    this.setState({
      [input_name]: e.target.value
    })
  }

  onLoginButtonPress = async () => {
    this.setState({
      isLoading: true,
      isError: false
    })
    var headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    }
    console.log(LOGIN_API)
    console.log('email & pass', this.state.email, this.state.password)

    axios
      .post(
        LOGIN_API,
        {
          email: this.state.email,
          password: this.state.password
        },
        null,
        headers
      )
      .then(response => {
        console.log('response login : ', response)
        var res = response.data
        if (!res.user) {
          console.log('login failed')
          this.setState({ isLoading: false, isError: true })
        } else {
          console.log('login success', res.user)
          var data = JSON.stringify(res.user)
          console.log('data', data)

          AsyncStorage.setItem('userData', data)
          Actions.UserList()
        }
      })
      .catch(err => {
        console.log(err)
        console.log('login failed')
        this.setState({ isLoading: false, isError: true })
      })
  }
  goToRegister = () => {
    Actions.Register()
  }

  showLoginButton() {
    return (
      <Button
        style={[
          {
            backgroundColor: 'black',
            justifyContent: 'center',
            borderRadius: 5
          },
          UtilStyles.buttonStyle
        ]}
        onPress={e => this.onLoginButtonPress()}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold'
          }}>
          LOGIN
        </Text>
      </Button>
    )
  }

  showRegisterButton = () => {
    return (
      <Button
        style={[
          {
            backgroundColor: 'black',
            justifyContent: 'center',
            borderRadius: 5
          },
          UtilStyles.buttonStyle
        ]}
        onPress={e => this.goToRegister()}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold'
          }}>
          REGISTER
        </Text>
      </Button>
    )
  }

  render() {
    console.log('isLoading', this.state.isLoading)
    return (
      <KeyboardAvoidingView style={UtilStyles.wrapContainer}>
        <View style={UtilStyles.container}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 50
              //   alignItems: "center"
            }}>
            <Text> Login </Text>
            <TextInput
              style={styles.formInputLine}
              label={<Icon style={{ color: 'grey' }} name="user" />}
              autoCorrect={false}
              autoCapitalize={'none'}
              placeholder="Enter Username"
              clearButtonMode="always"
              onChangeText={this.onEmail.bind(this)}
              value={this.state.email}
            />
            <TextInput
              style={styles.formInputLine}
              label={<Icon style={{ color: 'grey' }} name="lock" />}
              secureTextEntry={true}
              placeholder="Enter Password"
              clearButtonMode="always"
              onChangeText={this.onPass.bind(this)}
              value={this.state.password}
            />

            {this.state.isLoading ? (
              <View style={{ margin: 30 }}>
                <ActivityIndicator size="large" color="black" />
              </View>
            ) : (
              <View />
            )}

            {this.state.isError ? (
              <View style={{ margin: 30 }}>
                <Text style={{ color: 'red' }}>Error to login.</Text>
                <Text style={{ color: 'red' }}>Please try again.</Text>
              </View>
            ) : (
              <View />
            )}

            <View
              style={{
                paddingHorizontal: 30,
                paddingTop: 30,
                alignItems: 'center'
              }}>
              {this.showLoginButton()}
              <Text style={{ margin: 30 }}> OR </Text>
              {this.showRegisterButton()}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
