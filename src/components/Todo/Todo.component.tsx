import { TodoHeader, TodoItem } from './components'
import Styled from './Todo.styles'

export function Todo() {
  return (
    <Styled.Root>
      <TodoHeader />
      <Styled.Content>
        <TodoItem
          id="checkbox-item-1"
          description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        />
        <TodoItem
          id="checkbox-item-2"
          description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        />
        <TodoItem
          id="checkbox-item-3"
          description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        />
      </Styled.Content>
    </Styled.Root>
  )
}
