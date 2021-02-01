import { useState, useEffect } from 'react'
import { Appearance } from 'react-native'
import themes from '~/theme'

export function useTheme() {
  const colorSchema = Appearance.getColorScheme()
  let initialTheme = themes[colorSchema] || themes.light

  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    setTheme(themes[colorSchema])
    console.tron.log(`theme ${JSON.stringify(theme)}`)
  }, [colorSchema])

  return theme
}
