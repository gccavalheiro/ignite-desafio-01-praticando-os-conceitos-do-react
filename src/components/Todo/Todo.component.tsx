import { v4 as uuid } from 'uuid'

import { ITaskProps } from '../../Screen'
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
        {tasks
          .map((task) => (
            <TodoItem
              key={uuid()}
              id={`checkbox-item-${uuid()}`}
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
