import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native'
import colors from '~/ui/global_styles/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#7159c1',
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: colors.gray4,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
