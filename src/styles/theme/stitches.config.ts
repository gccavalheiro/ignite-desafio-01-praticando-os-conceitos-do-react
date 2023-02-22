import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      purple: '#8284FA',
      purpleDark: '#5E60CE',
      blue: '#4EA8DE',
      blueDark: '#1E6F9F',
      gray700: '#0D0D0D',
      gray600: '#1A1A1A',
      gray500: '#262626',
      gray400: '#333333',
      gray300: '#808080',
      gray200: '#D9D9D9',
      gray100: '#F2F2F2',
      danger: '#E25858',
    },
    fonts: {
      inter: 'Inter, sans-serif',
    },
    fontWeights: {
      regular: '400',
      bold: '700',
    },
    lineHeights: {
      normal: '140%',
    },
  },
  media: {
    xs: '(max-width: 375.98px)',
    xxs: '(min-width: 376px) and (max-width: 424.98px)',
    sm: '(min-width: 425px) and (max-width: 767.98px)',
    md: '(min-width: 768px)',
    xm: '(min-width: 900px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1440px)',
    xxxl: '(min-width: 1920px)',
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 426px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1440px)',
  },
  utils: {},
})

export type CSS = Stitches.CSS<typeof config>
