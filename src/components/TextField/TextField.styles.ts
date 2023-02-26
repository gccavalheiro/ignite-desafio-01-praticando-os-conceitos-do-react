import { styled } from '../../styles'

const Root = styled('input', {
  flex: 1,
  borderRadius: 8,
  padding: '0 1rem',
  height: 54,
  backgroundColor: '$gray500',
  outline: '2px solid $gray700',
  color: '$gray100',
  fontSize: '$16',
  transition: 'all 300ms ease-in-out',
  border: 'none',

  '&:focus': {
    backgroundColor: '$gray400',
  },
})

export default {
  Root,
}
