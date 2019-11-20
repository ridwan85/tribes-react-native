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
import { styles } from './RegisterStyle'
import { UtilStyles } from '../../style/styles'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
import { mainEndpoint } from '../../endpoint'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Left, Body, Right, Title } from 'native-base'

const REGISTER_API = `${mainEndpoint}/users`

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onName(text) {
    let reg = /^[a-zA-Z][a-zA-Z\s]*$/
    if (reg.test(text) === false) {
      console.log('not applicable')
      this.setState({ name: text, name_valid: false })
    } else {
      console.log('valid name')
      this.setState({ name: text, name_valid: true })
    }
  }

  onEmail(text) {
    //use regex to get email validation
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (reg.test(text) === false) {
      console.log('not email')
      this.setState({ email: text, email_valid: false })
    } else {
      console.log('valid email')
      this.setState({ email: text, email_valid: true })
    }
  }

  onPass(text) {
    let reg = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i
    if (reg.test(text) === false) {
      console.log('not alpha')
      this.setState({ password: text, pwd_valid: false })
    } else {
      this.setState({ password: text, pwd_valid: true })
      console.log('alphanumeric')
    }
  }

  handleInput = (input_name, e) => {
    console.log(input_name, e.target.value)
    this.setState({
      [input_name]: e.target.value
    })
  }

  onRegisterButtonPress = async () => {
    this.setState({
      isLoading: true,
      isError: false
    })
    var headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    }

    axios
      .post(
        REGISTER_API,
        {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name
        },
        null,
        headers
      )
      .then(response => {
        console.log('response register : ', response)
        var res = response.data
        if (!res) {
          console.log('register failed')
          this.setState({ isLoading: false, isError: true })
        } else {
          console.log('register success', res)
          Actions.Login()
        }
      })
      .catch(err => {
        console.log(err)
        console.log('login failed')
        this.setState({ isLoading: false, isError: true })
      })
  }

  showRegisterButton() {
    if (
      this.state.email_valid &&
      this.state.name_valid &&
      this.state.pwd_valid
    ) {
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
          onPress={e => this.onRegisterButtonPress()}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold'
            }}>
            REGISTER
          </Text>
        </Button>
      )
    } else {
      return (
        <Button
          style={[
            {
              backgroundColor: 'grey',
              justifyContent: 'center',
              borderRadius: 5
            },
            UtilStyles.buttonStyle
          ]}
          onPress={e => console.log(e)}>
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
  }

  renderCondition = (item, condition) => {
    if (item == 'email') {
      if (this.state.email_valid) {
        return (
          <Text style={{ color: 'green' }}>
            The {item} field is {condition}
          </Text>
        )
      }
      if (this.state.email_valid == undefined) {
        return null
      }
      if (!this.state.email_valid) {
        return (
          <Text style={{ color: 'red' }}>
            Make sure the {item} field is {condition}
          </Text>
        )
      }
    }

    if (item == 'name') {
      if (this.state.name_valid) {
        return (
          <Text style={{ color: 'green' }}>
            The {item} field is {condition}
          </Text>
        )
      }
      if (this.state.name_valid == undefined) {
        return null
      }
      if (!this.state.name_valid) {
        return (
          <Text style={{ color: 'red' }}>
            Make sure the {item} field is {condition}
          </Text>
        )
      }
    }

    if (item == 'password') {
      if (this.state.pwd_valid) {
        return (
          <Text style={{ color: 'green' }}>
            The {item} field is {condition}
          </Text>
        )
      }
      if (this.state.pwd_valid == undefined) {
        return null
      }
      if (!this.state.pwd_valid) {
        return (
          <Text style={{ color: 'red' }}>
            Make sure the {item} field is {condition}
          </Text>
        )
      }
    }
  }

  render() {
    console.log(this.state.email_valid)
    return (
      <Container>
        <Header style={{ backgroundColor: 'grey' }}>
          <Body>
            <Title style={{ color: 'black' }}>Register User</Title>
          </Body>
        </Header>
        <KeyboardAvoidingView style={UtilStyles.wrapContainer}>
          <View style={UtilStyles.container}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 50
                //   alignItems: "center"
              }}>
              <Text> Register User </Text>
              <TextInput
                style={styles.formInputLine}
                label={<Icon style={{ color: 'grey' }} name="user" />}
                autoCorrect={false}
                autoCapitalize={'none'}
                placeholder="Enter name"
                clearButtonMode="always"
                onChangeText={this.onName.bind(this)}
                value={this.state.name}
              />
              {this.renderCondition('name', 'Valid')}

              <TextInput
                style={styles.formInputLine}
                label={<Icon style={{ color: 'grey' }} name="email" />}
                autoCorrect={false}
                autoCapitalize={'none'}
                placeholder="Enter email"
                clearButtonMode="always"
                onChangeText={this.onEmail.bind(this)}
                value={this.state.email}
              />
              {this.renderCondition('email', 'Valid')}

              <TextInput
                style={styles.formInputLine}
                label={<Icon style={{ color: 'grey' }} name="lock" />}
                secureTextEntry={true}
                placeholder="Enter Password"
                clearButtonMode="always"
                onChangeText={this.onPass.bind(this)}
                value={this.state.password}
              />

              {this.renderCondition('password', 'Valid')}

              {this.state.isLoading ? (
                <View style={{ margin: 30 }}>
                  <ActivityIndicator size="large" color="black" />
                </View>
              ) : (
                <View />
              )}

              {this.state.isError ? (
                <View style={{ margin: 30 }}>
                  <Text style={{ color: 'red' }}>Error to register.</Text>
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
                }}></View>
              {this.showRegisterButton()}
            </View>
          </View>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}
