import React from 'react'

import Styled from './Typography.styles'

interface ITypographyProps
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  children: React.ReactNode
}

export function Typography(props: ITypographyProps) {
  const { children, ...rest } = props
  return <Styled.Root {...rest}>{children}</Styled.Root>
}
