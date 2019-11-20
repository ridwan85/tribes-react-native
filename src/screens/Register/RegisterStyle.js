import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  LoginFormContainer: {
    flex: 1
  },
  backgroundImageStyle: {
    flex: 1,
    width: null
  },
  welcomeText: {
    top: 50,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center'
  },
  cardContainer: {
    margin: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    top: 65,
    padding: 5,
    paddingBottom: 10,
    bottom: 30,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff'
  },
  supButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  forgotpasswordLinkTextContainer: {
    padding: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },

  formInputLine: {
    margin: 10,
    alignItems: 'center',
    fontSize: 12,
    paddingLeft: 20,
    height: 40,
    fontFamily: 'Lato-Regular',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
})
