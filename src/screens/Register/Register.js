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
    this.setState({
      name: text
    })
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
  }

  render() {
    console.log('isLoading', this.state.isLoading)
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
