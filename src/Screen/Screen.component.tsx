import { Plus } from 'phosphor-react'
import React from 'react'

import {
  Button,
  Container,
  Header,
  TextField,
  Todo,
  Toolbar,
} from '../components'
import Styled from './Screen.styles'

interface IScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Screen(props: IScreenProps) {
  const maxWidth = 736

  return (
    <Styled.Root {...props}>
      <Header />
      <Container css={{ marginTop: -27 }} maxWidth={maxWidth}>
        <Toolbar>
          <TextField placeholder="Adicione uma nova tarefa" />
          <Button icon={<Plus />}>Criar</Button>
        </Toolbar>
      </Container>
      <Container css={{ marginTop: 64 }} maxWidth={maxWidth}>
        <Todo />
      </Container>
    </Styled.Root>
  )
}
