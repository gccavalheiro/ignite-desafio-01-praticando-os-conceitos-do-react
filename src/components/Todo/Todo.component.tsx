import React from 'react'
import { ITaskProps } from '../../Screen'
import { TodoHeader, TodoItem } from './components'
import Styled from './Todo.styles'

interface ITodoProps {
  tasks: ITaskProps[]
}

export function Todo(props: ITodoProps) {
  const { tasks, ...rest } = props
  const [checked, setChecked] = React.useState('indeterminate')

  return (
    <Styled.Root {...rest}>
      <TodoHeader tasks={tasks} />
      <Styled.Content>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            id={`checkbox-item-${index}`}
            description={task.description}
            checked={task.checked}
          />
        ))}
      </Styled.Content>
    </Styled.Root>
  )
}
