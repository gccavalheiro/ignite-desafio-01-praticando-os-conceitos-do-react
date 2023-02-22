import { Typography } from '../Typography'
import Styled from './Toolbar.styles'

export function Toolbar() {
  return (
    <Styled.Root>
      <Styled.Input placeholder="Adicione uma nova tarefa" />
      <Styled.Button>
        <Typography as="span" fontSize="16" fontWeight="bold" color="$gray100">
          Criar
        </Typography>
      </Styled.Button>
    </Styled.Root>
  )
}
