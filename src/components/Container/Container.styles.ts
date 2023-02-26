import { styled } from '../../styles'

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '@bp2': {
    padding: '0 20px',
  },

  '@bp3': {
    padding: '0',
  },
})

export default {
  Root,
}
