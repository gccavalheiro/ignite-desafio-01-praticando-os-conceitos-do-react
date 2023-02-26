import { Badge } from '../../../Badge'
import { Typography } from '../../../Typography'
import Styled from './TodoHeader.styles'

export function TodoHeader() {
  return (
    <Styled.Root>
      <Styled.HeaderBox>
        <Typography as="h5" fontSize={18} color="$blue">
          Tarefas criadas
        </Typography>
        <Badge>5</Badge>
      </Styled.HeaderBox>

      <Styled.HeaderBox>
        <Typography as="h5" fontSize={18} color="$purple">
          Concluídas
        </Typography>
        <Badge>2 de 5</Badge>
      </Styled.HeaderBox>
    </Styled.Root>
  )
}
