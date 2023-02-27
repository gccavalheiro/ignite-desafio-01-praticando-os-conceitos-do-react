import { Notepad } from 'phosphor-react'

import { ITaskProps } from '../../Screen'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { TodoHeader, TodoItem } from './components'
import Styled from './Todo.styles'

interface ITodoProps {
  tasks: ITaskProps[]
  updateChecked: (id: string, checked: boolean) => void
  deleteTask: (id: string) => void
}

export function Todo(props: ITodoProps) {
  const { tasks, updateChecked, deleteTask, ...rest } = props

  return (
    <Styled.Root {...rest}>
      <TodoHeader tasks={tasks} />
      <Styled.Content>
        {!tasks.length && (
          <Styled.WhitoutTasks>
            <Icon css={{ color: '$gray300', fontSize: '$48' }}>
              <Notepad />
            </Icon>
            <div>
              <Typography fontWeight="bold" color="$gray300">
                Você ainda não tem tarefas cadastradas
              </Typography>
              <Typography color="$gray300">
                Crie tarefas e organize seus itens a fazer
              </Typography>
            </div>
          </Styled.WhitoutTasks>
        )}
        {tasks
          .map((task) => (
            <TodoItem
              key={task.id}
              id={`checkbox-item-${task.id}`}
              description={task.description}
              checked={task.checked}
              onTrash={() => deleteTask(task.id)}
              onCheckedChange={(value) =>
                updateChecked(task.id, value as boolean)
              }
            />
          ))
          .reverse()}
      </Styled.Content>
    </Styled.Root>
  )
}
