import dark from './dark'
import light from './light'

const fonts = []
const fontsize = {
  xs: '7px',
  sm: '12px',
  md: '16px',
  lg: '18px',
  xl: '22px'
}
const margin = {
  xs: '2px',
  sm: '5px',
  md: '12px',
  lg: '20px',
  xl: '30px'
}

export default {
  dark: {
    ...dark,
    fonts,
    fontsize,
    margin: margin,
    padding: margin,
  },
  light: {
    ...light,
    fonts,
    fontsize,
    margin: margin,
    padding: margin,
  }
}