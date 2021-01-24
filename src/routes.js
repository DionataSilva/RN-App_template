import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { MainScreen, HomeScreen } from '~/ui/screens'

// Stack Global do app
const App = createSwitchNavigator({
  Auth: {
    screen: MainScreen,
  },
  App: {
    screen: HomeScreen,
  },
}, {
  // initialRouteName: 'Auth',
})


const Routes = createAppContainer(App)

export default Routes
