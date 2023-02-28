import { ListPlus, Plus, Trash } from 'phosphor-react'
import React from 'react'
import { v4 as uuid } from 'uuid'

import {
  Button,
  Container,
  Header,
  IToastProps,
  TextField,
  Toast,
  Todo,
  Toolbar,
  Typography,
} from '../components'
import Styled from './Screen.styles'

interface IScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

const maxWidth = 736

export interface ITaskProps {
  id: string
  description: string
  checked: boolean
}

const taskMock: ITaskProps[] = [
  {
    id: uuid(),
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    id: uuid(),
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
]

export function Screen(props: IScreenProps) {
  const [tasks, setTasks] = React.useState<ITaskProps[]>(taskMock)
  const [newTask, setNewTask] = React.useState<string>('')
  const [toastOpen, setToastOpen] = React.useState<IToastProps>({
    title: '',
    open: false,
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleInputInvalid(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function handleCreateTask(event: React.FormEvent) {
    event.preventDefault()

    setTasks([...tasks, { id: uuid(), description: newTask, checked: false }])
    setNewTask('')
    setToastOpen({
      icon: <ListPlus />,
      title: 'Uma nova tarefa foi adicionada.',
      open: true,
      variant: 'success',
    })
  }

  function deleteTask(id: ITaskProps['id']) {
    const taskDeletedOne = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(taskDeletedOne)
    setToastOpen({
      icon: <Trash />,
      title: 'Uma tarefa foi removida.',
      open: true,
      variant: 'info',
    })
  }

  function updateChecked(id: ITaskProps['id'], checked: ITaskProps['checked']) {
    const newTasks = tasks.slice()
    const taskIndex = newTasks.findIndex((task) => task.id === id)

    if (taskIndex < 0) {
      return
    }

    newTasks[taskIndex].checked = checked
    setTasks(newTasks)
  }

  React.useEffect(() => {
    if (toastOpen.open) {
      setTimeout(() => {
        setToastOpen({ ...toastOpen, open: false })
      }, 3000)
    }
  }, [toastOpen])

  return (
    <Styled.Root {...props}>
      <Header />
      <Container css={{ marginTop: -27 }} maxWidth={maxWidth}>
        <Toolbar onSubmit={handleCreateTask}>
          <TextField
            placeholder="Adicione uma nova tarefa"
            value={newTask}
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
        <Todo
          tasks={tasks}
          updateChecked={updateChecked}
          deleteTask={deleteTask}
        />
      </Container>
      <Toast
        open={toastOpen.open}
        title={toastOpen.title}
        icon={toastOpen.icon}
        variant={toastOpen.variant}
      />
    </Styled.Root>
  )
}
