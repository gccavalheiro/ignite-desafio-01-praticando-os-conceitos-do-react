import { styled } from '../../styles'

const Root = styled('div', {})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginTop: '1.5rem',
})

export default {
  Root,
  Content,
}
