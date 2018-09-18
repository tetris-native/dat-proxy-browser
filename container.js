import { connect } from 'react-redux'
import { setUrl, setInput, toggleLoading } from './actions'
import App from './components/app'

import getCleanURL from './getCleanURL'
import handleURL from './handleURL'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  setUrl: url => {
    dispatch(toggleLoading())
    getCleanURL(url)
      .then(cleanUrl => {
        handleURL(cleanUrl)
          .then(_ => {
            dispatch(setUrl(cleanUrl))
            dispatch(toggleLoading())
          })
          .catch(_ => {
            dispatch(setUrl(`https://duckduckgo.com/?q=${url}`))
            dispatch(toggleLoading())
          })
    })
  },
  setInput: input => dispatch(setInput(input))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)