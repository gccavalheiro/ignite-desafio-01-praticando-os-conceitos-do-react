import React from 'react'

import Styled from './Container.styles'

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string
  children: React.ReactNode
}

export function Container(props: IContainerProps) {
  const { children, maxWidth = 736, ...rest } = props
  return (
    <Styled.Root css={{ maxWidth }} {...rest}>
      {children}
    </Styled.Root>
  )
}
