import { Check, Trash } from 'phosphor-react'

import { Button } from '../../../Button'
import { Typography } from '../../../Typography'
import Styled from './TodoItem.styles'

interface ITodoItemProps {
  id: string
  description: string
}

export function TodoItem(props: ITodoItemProps) {
  const { id, description, ...rest } = props

  return (
    <Styled.Root {...rest}>
      <Styled.Checkbox id={id}>
        <Styled.CheckboxIndicator>
          <Check />
        </Styled.CheckboxIndicator>
      </Styled.Checkbox>
      <Styled.CheckboxLabel htmlFor={id}>{description}</Styled.CheckboxLabel>
      <Styled.Button icon={<Trash />} background="transparent" />
    </Styled.Root>
  )
}
