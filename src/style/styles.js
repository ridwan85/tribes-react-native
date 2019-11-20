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
  containerTransparent: {
    flex: 1
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  containerRowRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  containerRowLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  containerRowCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // titleText: {
  //   fontSize: 20,
  //   fontFamily: "System",
  //   color: RkTheme.current.colors.text.base
  // },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  section2: {
    marginTop: 50,
    marginBottom: 50,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  border: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  borderHome: {
    borderColor: Color.material_grey_300,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  tableContent: {
    padding: 5,
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  columnContainer: {
    marginTop: 16
  },
  spaceAround: {
    marginHorizontal: 5
  },
  spaceH: {
    marginHorizontal: 5
  },
  spaceTop: {
    marginTop: 8
  },
  spaceBottom: {
    marginBottom: 8
  },
  spaceVertical: {
    marginVertical: 8
  },
  description: {
    paddingRight: 10,
    paddingLeft: 20,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1
  },
  exampleView: {
    paddingRight: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1
  },
  // text: {
  //   color: RkTheme.current.colors.text.base
  // },
  // codeText: {
  //   color: RkTheme.current.colors.danger
  // },
  tab: {
    paddingLeft: 20,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20
  },
  column: {
    flexDirection: 'column'
  },
  tabContent: {
    fontSize: 32,
    alignSelf: 'center',
    padding: 10,
    color: Color.light_orange
  },
  buttonStyle: {
    width: SCREEN_WIDTH - 50
  },
  fillWidth: {
    width: '100%'
  },
  fillHeight: {
    height: SCREEN_HEIGHT
  },
  overlay: {
    justifyContent: 'flex-end',
    paddingVertical: 23,
    paddingHorizontal: 16
  },

  commentContainer: {
    paddingRight: 5,
    marginBottom: 10,
    flexDirection: 'row'
  },
  left: {
    padding: 5
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  right: {
    flex: 1
  },
  rightContent: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#f1f3f6'
  },
  rightContentTop: {
    flexDirection: 'row'
  },
  // successIcon: {
  //   color: RkTheme.current.colors.success
  // },
  screen: {
    backgroundColor: '#f0f1f5',
    padding: 12
  },
  buttonIcon: {
    marginRight: 7,
    fontSize: 19.7
  },
  footer: {
    marginHorizontal: 16
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 17
  },
  dot: {
    fontSize: 6.5,
    color: '#0000008e',
    marginLeft: 2.5,
    marginVertical: 10
  },
  floating: {
    width: 56,
    height: 56,
    position: 'absolute',
    zIndex: 200,
    right: 16,
    top: 173
  },
  footerButtons: {
    flexDirection: 'row'
  },
  overlay: {
    justifyContent: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  inputIcon: {
    fontSize: 15,
    color: 'grey',
    marginLeft: 4,
    marginRight: 4,
    fontWeight: 'bold'
  },
  searchIcon: {
    marginLeft: 20
  },
  navigationBarTitle: {
    textAlign: 'center',
    flex: 1,
    color: Color.dark_green,
    fontSize: 16,
    fontWeight: 'bold'
  },
  navigationBarTitle2: {
    textAlign: 'center',
    flex: 1,
    color: Color.dark_green,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: -30
  },
  homeScrollList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  name: {
    fontWeight: 'bold',
    paddingBottom: 5
  },
  editIcon: {
    flex: 1,
    alignItems: 'flex-end'
  },
  body: {
    paddingBottom: 10
  },
  rightActionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    fontSize: 12,
    paddingLeft: 5,
    color: '#9B9B9B',
    fontStyle: 'italic'
  },
  actionText: {
    color: '#9B9B9B',
    fontWeight: 'bold'
  },
  repliedSection: {
    paddingTop: 15,
    paddingBottom: 20,
    width: 150,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  repliedImg: {
    height: 20,
    width: 20,
    borderRadius: 10
  },
  repliedUsername: {
    color: '#9B9B9B'
  },
  repliedText: {
    color: '#9B9B9B'
  },
  repliedCount: {
    color: '#9B9B9B',
    fontSize: 11
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  submit: {
    padding: 10
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    color: '#424242'
  },
  likeNr: {
    fontWeight: 'normal',
    fontSize: 12
  },
  likeHeader: {
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
    fontWeight: 'bold'
  },
  likeButton: {
    margin: 10,
    alignItems: 'center'
  },
  likeContainer: {
    padding: 10,
    width: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  likeImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  likename: {
    fontWeight: 'bold',
    fontSize: 14
  },
  editModalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editModal: {
    backgroundColor: 'white',
    width: 400,
    height: 300,
    borderWidth: 2,
    borderColor: 'silver'
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    width: 80,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    margin: 10
  },
  modalBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  formInputStandard: {
    margin: 10,
    alignItems: 'center',
    fontSize: 12,
    paddingLeft: 20,
    height: 40,
    fontFamily: 'Lato-Regular',
    borderRadius: 10,
    // elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  headerTitleOnly: {
    backgroundColor: 'black',
    height: 70,
    color: 'white',
    flexDirection: 'column'
  },

  titleText: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    fontWeight: 'bold'
  },
  standardText: {
    color: 'black',
    fontFamily: 'Lato-Regular',
    fontSize: 12
  },
  bigFontGreen: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  buttonFillWidthYellow: {
    backgroundColor: 'black',
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center'
  },
  buttonTextBlack: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    borderRadius: 0,
    fontWeight: 'bold'
  },
  viewOr: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineOr: {
    width: '30%',
    height: 1,
    backgroundColor: 'grey'
  },
  fontOr: {
    fontFamily: 'Lato-Light',
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10
  }
})
