import {
  SET_URL,
  SET_DISPLAY_URL,
  SET_INPUT,
  SET_LOADING,
  GO_BACK,
  GO_FORWARD
} from './constants'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state, input: action.input
      }
    case SET_DISPLAY_URL:
      return {
        ...state, display_url: action.url
      }
    case SET_URL:
      return {
        ...state, url: action.url
      }
    case SET_LOADING:
      return {
        ...state, loading: action.loading
      }
    case GO_BACK:
      action.webview.goBack()
      return { ...state }
    case GO_FORWARD:
      action.webview.goForward()
      return { ...state }
    default:
      return state
  }
}
