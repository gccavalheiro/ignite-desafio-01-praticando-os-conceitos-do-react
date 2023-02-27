import { Check, Trash } from 'phosphor-react'
import React from 'react'

import Styled from './TodoItem.styles'

interface ITodoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  description: string
  checked: boolean
  onTrash: () => void
  onCheckedChange: (value: boolean | 'indeterminate') => void
}

export function TodoItem(props: ITodoItemProps) {
  const { id, description, checked, onTrash, onCheckedChange, ...rest } = props

  function handleOnClickTrash(event: React.MouseEvent) {
    event.stopPropagation()

    onTrash()
  }

  return (
    <Styled.Root {...rest} onClick={() => onCheckedChange(!checked)}>
      <Styled.Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Styled.CheckboxIndicator>
          <Check />
        </Styled.CheckboxIndicator>
      </Styled.Checkbox>
      <Styled.CheckboxLabel>{description}</Styled.CheckboxLabel>
      <Styled.Button
        icon={<Trash />}
        background="transparent"
        onClick={handleOnClickTrash}
      />
    </Styled.Root>
  )
}
