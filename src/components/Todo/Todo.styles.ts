import { styled } from '../../styles'

const Root = styled('div', {})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginTop: '1.5rem',
})

const WhitoutTasks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: 16,
  marginTop: 80,
  textAlign: 'center',
})

export default {
  Root,
  Content,
  WhitoutTasks,
}
