import { styled } from '../../styles'
import { Icon as IconComponent } from '../Icon'

const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  minHeight: 54,
  height: 54,
  backgroundColor: '$blueDark',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: '$16',
  padding: '1rem',
  transition: 'all 300ms ease-in-out',
  color: '$gray100',

  '&:hover, &:focus': {
    backgroundColor: '$blue',
  },

  '&:disabled': {
    backgroundColor: '$gray500',
    filter: 'brightness(.9)',
    color: '$gray300',

    '&:disabled, &:disabled svg ': {
      cursor: 'not-allowed',
    },
  },

  variants: {
    background: {
      transparent: {
        backgroundColor: 'transparent',
      },
    },
  },
})

const Icon = styled(IconComponent, {
  fontSize: '$20',
})

export default {
  Button,
  Icon,
}
