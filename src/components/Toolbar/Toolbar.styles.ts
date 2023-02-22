import { styled } from '../../styles'

const Root = styled('div', {
  display: 'flex',
  width: '100%',
  gap: 8,
})

const Input = styled('input', {
  flex: 1,
  borderRadius: 8,
  padding: '0 16px',
  height: 54,
  backgroundColor: '$gray500',
  border: '2px solid $gray700',
  color: '$gray100',
  fontSize: '1rem',
  transition: 'all 300ms ease-in-out',

  '&:placeholder': {
    color: '$gray300',
  },

  '&:focus': {
    outline: 'none',
    backgroundColor: '$gray400',
  },
})

const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 90,
  minWidht: 90,
  height: 52,
  minHeight: 52,
  padding: '1rem',
  backgroundColor: '$blueDark',
  transition: 'background 300ms ease-in-out',
  borderRadius: 8,
  fontSize: '1rem',

  '&:hover, &:focus': {
    backgroundColor: '$blue',
    outline: 'none',
  },
})

export default {
  Root,
  Input,
  Button,
}
