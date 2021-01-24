import React from 'react'

import '~/config/ReactotronConfig'

import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'
import { StatusBar } from 'react-native'
import colors from './ui/global_styles/colors'

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor={colors.rocket} />
    <Routes />
  </Provider>
)

export default App
