import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Thumbnail,
} from 'native-base';
import {StatusBar, AsyncStorage, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';

import {Actions} from 'react-native-router-flux';
import Color from '../config/colors.json';
import {UtilStyles} from '../style/styles';

export default class MainHeader extends Component {
  onButtonPress = () => {
    Actions.MyAccount();
  };

  render() {
    return (
      <Header
        style={[
          UtilStyles.headerTitleOnly,
          {borderBottomWidth: 0, elevation: 0},
        ]}>
        <StatusBar backgroundColor={'black'} barStyle="light-content" />
        <Container
          style={{
            flexDirection: 'row',
            marginTop: -30,
            marginBottom: -50,
            backgroundColor: 'transparent',
          }}>
          <Left style={{flex: 1}}>
            <Icon2
              size={25}
              style={{
                width: 30,
                height: 30,
                margin: 6,
                color: 'white',
                marginTop: 10,
                marginLeft: 20,
              }}
              name="chevron-left"
              onPress={() => Actions.pop()}
            />
          </Left>
          <Body style={{flex: 2}}>
            <Text style={[UtilStyles.titleText, {textAlign: 'center'}]}>
              {this.props.header_text}
            </Text>
          </Body>

          {this.props.home === 'true' ? (
            <Right style={{flex: 1}}>
              <Icon2
                size={25}
                style={{
                  width: 30,
                  height: 30,
                  margin: 6,
                  color: 'white',
                  marginTop: 10,
                  marginLeft: 20,
                }}
                name="home"
                onPress={() => Actions.JobList()}
              />
            </Right>
          ) : (
            <Right style={{flex: 1}} />
          )}
        </Container>
      </Header>
    );
  }
}
