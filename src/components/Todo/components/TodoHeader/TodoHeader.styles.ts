import { styled } from '../../../../styles'

const Root = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const HeaderBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

export default {
  Root,
  HeaderBox,
}
