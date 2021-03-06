import { StyleSheet } from 'react-native'
const container = {
  display: 'flex',
  flex: 1
}
export default StyleSheet.create({
  placeholder: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    height: 36,
    marginTop: 16,
    padding: 6,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 16
  },
  toolbar: {
    height: 80,
    padding: 14,
    backgroundColor: 'lightgrey',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bg: {
    ...container
    // backgroundColor: 'grey'
  },
  webview: {
    ...container
  },
  _webview: {
    ...container,
    display: 'none'
  }
})
