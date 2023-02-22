import React from 'react'

import { ComponentProps } from '@stitches/react'

import Styled from './Typography.styles'

type ITypographyBaseProps = ComponentProps<typeof Styled.Root>

interface ITypographyProps extends ITypographyBaseProps {
  children: React.ReactNode
  as: keyof JSX.IntrinsicElements
  color: string
}

export function Typography(props: ITypographyProps) {
  const { children, color, ...rest } = props
  return (
    <Styled.Root css={{ color }} {...rest}>
      {children}
    </Styled.Root>
  )
}
