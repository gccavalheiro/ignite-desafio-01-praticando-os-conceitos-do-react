import { Plus } from 'phosphor-react'
import React from 'react'

import {
  Button,
  Container,
  Header,
  TextField,
  Todo,
  Toolbar,
  Typography,
} from '../components'
import Styled from './Screen.styles'

interface IScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

const maxWidth = 736

export interface ITaskProps {
  description: string
  checked: boolean
}

const taskMock: ITaskProps[] = [
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
]

export function Screen(props: IScreenProps) {
  const [tasks, setTasks] = React.useState<ITaskProps[]>(taskMock)
  const [newTask, setNewTask] = React.useState<ITaskProps>({
    description: '',
    checked: false,
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask({ ...newTask, description: event.target.value })
  }

  function handleInputInvalid(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function handleCreateTask(event: React.FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask])
    setNewTask({ description: '', checked: false })
  }

  return (
    <Styled.Root {...props}>
      <Header />
      <Container css={{ marginTop: -27 }} maxWidth={maxWidth}>
        <Toolbar onSubmit={handleCreateTask}>
          <TextField
            placeholder="Adicione uma nova tarefa"
            value={newTask.description}
            onChange={handleInputChange}
            onInvalid={handleInputInvalid}
            required
          />
          <Button icon={<Plus />} type="submit" disabled={!newTask}>
            <Typography as="span" fontSize="16" fontWeight="bold">
              Criar
            </Typography>
          </Button>
        </Toolbar>
      </Container>
      <Container css={{ marginTop: 64 }} maxWidth={maxWidth}>
        <Todo tasks={tasks} />
      </Container>
    </Styled.Root>
  )
}
