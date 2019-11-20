import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
import Color from '../config/colors.json'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export const UtilStyles = StyleSheet.create({
  containerFullScreen: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'white'
  },
  wrapContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonStyle: {
    width: SCREEN_WIDTH - 50
  }
})
