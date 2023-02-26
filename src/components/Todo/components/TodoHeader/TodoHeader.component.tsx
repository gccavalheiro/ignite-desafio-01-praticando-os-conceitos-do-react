import { ITaskProps } from '../../../../Screen'
import { Badge } from '../../../Badge'
import { Typography } from '../../../Typography'
import Styled from './TodoHeader.styles'

interface ITodoHeaderProps {
  tasks: ITaskProps[]
}

export function TodoHeader(props: ITodoHeaderProps) {
  const { tasks } = props
  const filterCheckedTak = tasks.filter((task) => {
    return task.checked === true
  })

  return (
    <Styled.Root>
      <Styled.HeaderBox>
        <Typography as="h5" fontSize={18} color="$blue">
          Tarefas criadas
        </Typography>
        <Badge>{tasks.length}</Badge>
      </Styled.HeaderBox>

      <Styled.HeaderBox>
        <Typography as="h5" fontSize={18} color="$purple">
          Concluídas
        </Typography>
        <Badge>
          {filterCheckedTak.length} de {tasks.length}
        </Badge>
      </Styled.HeaderBox>
    </Styled.Root>
  )
}
