import React from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from '../styles'
import OmniSearch from './omniSearch'
import BrowserWebView from './webview'

export default (props) => {
  const { url, loading } = props
  return (
    <View style={styles.container}>
      <OmniSearch {...props} />
      {url && !loading && <BrowserWebView {...props} />}
      {loading && <Text style={styles.placeholder}>Loading...</Text>}
    </View>
  )
}