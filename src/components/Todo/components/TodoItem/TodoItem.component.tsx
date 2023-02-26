import { Check, Trash } from 'phosphor-react'
import React from 'react'

import Styled from './TodoItem.styles'

interface ITodoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  description: string
  checked: boolean
  onCheckedChange?: () => void
}

export function TodoItem(props: ITodoItemProps) {
  const { id, description, checked, onCheckedChange, ...rest } = props

  return (
    <Styled.Root {...rest}>
      <Styled.Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Styled.CheckboxIndicator>
          <Check />
        </Styled.CheckboxIndicator>
      </Styled.Checkbox>
      <Styled.CheckboxLabel htmlFor={id}>{description}</Styled.CheckboxLabel>
      <Styled.Button icon={<Trash />} background="transparent" />
    </Styled.Root>
  )
}
