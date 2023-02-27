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

  'body, h1, h2, h3, h4, h5, h6, p, span, input': {
    fontFamily: '$inter',
  },

  button: {
    border: 'none',
  },

  'body::-webkit-scrollbar': {
    width: 6,
  },

  'body::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
  },

  'body::-webkit-scrollbar-thumb': {
    backgroundColor: 'darkgrey',
    outline: '1px solid slategrey',
    borderRadius: 8,
  },
})
