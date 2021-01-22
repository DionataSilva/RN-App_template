import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { MainScreen } from '~/ui/screens'

const Routes = createAppContainer(createSwitchNavigator({ MainScreen }))

export default Routes
