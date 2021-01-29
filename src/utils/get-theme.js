import { useColorScheme } from 'react-native'
import themes from '../theme'

export const getTheme = () => {
  const appTheme = useColorScheme()
  return themes[appTheme] || themes.light
}