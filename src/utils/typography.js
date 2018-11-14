import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.googleFonts = [
  {
    name: 'Martel',
    styles: ['600', '700', '900'],
  },
  {
    name: 'Quattrocento Sans',
    styles: ['400', '400i', '700'],
  },
]
fairyGatesTheme.headerFontFamily = ['Martel']
fairyGatesTheme.headerWeight = '900'

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
