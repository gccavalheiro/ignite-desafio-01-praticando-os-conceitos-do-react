import React from 'react'

import TodoLogo from '../../assets/logo.svg'
import Styled from './Header.styles'

interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header(props: IHeaderProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Logo src={TodoLogo} />
    </Styled.Root>
  )
}
