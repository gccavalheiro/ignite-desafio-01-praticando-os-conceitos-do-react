import { styled } from '../../styles'

const Root = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 200,
  width: '100%',
  backgroundColor: '$gray700',
})

const Logo = styled('img', {
  width: '100%',
  maxWidth: 126,
  height: 48,
})

export default {
  Root,
  Logo,
}
