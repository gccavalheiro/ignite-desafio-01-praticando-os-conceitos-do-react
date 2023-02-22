import { styled } from '../../styles'

const Root = styled('p', {
  variants: {
    fontSize: {
      12: {
        fontSize: '0.75rem',
      },
      14: {
        fontSize: '0.875rem',
      },
      16: {
        fontSize: '1rem',
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
    fontWeight: 'regular',
  },
})

export default {
  Root,
}
