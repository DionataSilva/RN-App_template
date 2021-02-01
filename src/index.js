import React from 'react'

import '~/config/ReactotronConfig'

import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './utils/hooks/use-theme'

const App = () => {
  let theme = useTheme()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.dark1}
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
