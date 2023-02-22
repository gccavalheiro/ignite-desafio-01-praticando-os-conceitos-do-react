import React from 'react'

import { ComponentProps } from '@stitches/react'

import Styled from './Container.styles'

interface IContainerProps extends ComponentProps<typeof Styled.Root> {
  maxWidth?: number
  children: React.ReactNode
}

export function Container(props: IContainerProps) {
  const { children, maxWidth, css, ...rest } = props
  return (
    <Styled.Root css={{ ...css, maxWidth }} {...rest}>
      {children}
    </Styled.Root>
  )
}
