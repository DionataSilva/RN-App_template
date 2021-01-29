import React from 'react'

import '~/config/ReactotronConfig'

import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { getTheme } from './utils'

const App = () => {
  const theme = getTheme()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
