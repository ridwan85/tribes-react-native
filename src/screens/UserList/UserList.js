import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { Button } from 'native-base'
import { styles } from './UserListStyle'
import { UtilStyles } from '../../style/styles'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
import { mainEndpoint } from '../../endpoint'
import { Container, Header, Icon, Body, Right, Title } from 'native-base'
import { InputAutoSuggest } from 'react-native-autocomplete-search'

const USER_API = `${mainEndpoint}/users`

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.retrieveUser()
  }

  retrieveUser = async () => {
    try {
      axios
        .get(USER_API)
        .then(response => {
          console.log(response)
          this.setState({
            users: response.data
          })
        })
        .catch(err => {
          console.log(err)
          console.log('login failed')
          this.setState({ isLoading: false, isError: true })
        })
    } catch (error) {
      // Error retrieving data
    }
  }
  handleInput = (input_name, e) => {
    console.log(input_name, e.target.value)
    this.setState({
      [input_name]: e.target.value
    })
  }
  userSelected = data => {
    if (data != null) {
      console.log(data)
    }
  }
  logout = () => {
    Actions.Login()
  }

  render() {
    console.log('isLoading', this.state.isLoading)
    return (
      <Container>
        <Header style={{ backgroundColor: 'grey' }}>
          <Body>
            <Title style={{ color: 'black' }}>Search User</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.logout}>
              <Icon type="FontAwesome" name="sign-out" />
            </Button>
          </Right>
        </Header>
        <KeyboardAvoidingView style={UtilStyles.wrapContainer}>
          <View style={UtilStyles.container}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 50
                //   alignItems: "center"
              }}>
              <Text> Search User </Text>
              <InputAutoSuggest
                style={{ flex: 1 }}
                staticData={this.state.users}
                itemFormat={{ id: '_id', name: 'name' }}
                onDataSelectedChange={data => this.userSelected(data)}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}
