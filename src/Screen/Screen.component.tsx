import React from 'react'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Toolbar } from '../components/Toolbar'
import Styled from './Screen.styles'

interface IScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Screen(props: IScreenProps) {
  return (
    <Styled.Root {...props}>
      <Header />
      <Container css={{ marginTop: -27 }} maxWidth={736}>
        <Toolbar />
      </Container>
    </Styled.Root>
  )
}
