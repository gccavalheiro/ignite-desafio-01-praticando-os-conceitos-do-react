import React from 'react'

import Styled from './Icon.styles'

interface IIconProps {
  children: React.ReactNode
}

export function Icon(props: IIconProps) {
  const { children } = props

  return <Styled.Root {...props}>{children}</Styled.Root>
}
