import { globalCss } from './theme/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    height: '100%',
  },

  body: {
    backgroundColor: '$gray600',
    color: '$gray100',
    fontFamily: '$inter',
    fontWeight: '$regular',
    fontSize: 16,
    minHeight: '100%',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: '$bold',
  },

  'h1, h2, h3, h4, h5, h6, p': {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },

  button: {
    border: 'none',
  },
})
