import { styled } from '../../styles'

const Root = styled('p', {
  variants: {
    fontSize: {
      12: {
        fontSize: '$12',
      },
      14: {
        fontSize: '$14',
      },
      16: {
        fontSize: '$16',
      },
      18: {
        fontSize: '$18',
      },
      20: {
        fontSize: '$20',
      },
      24: {
        fontSize: '$24',
      },
      28: {
        fontSize: '$28',
      },
      32: {
        fontSize: '$32',
      },
      36: {
        fontSize: '$36',
      },
      40: {
        fontSize: '$40',
      },
      44: {
        fontSize: '$44',
      },
      48: {
        fontSize: '$48',
      },
    },
    fontWeight: {
      regular: {
        fontWeight: '$regular',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
  },

  defaultVariants: {
    fontSize: 16,
  },
})

export default {
  Root,
}
