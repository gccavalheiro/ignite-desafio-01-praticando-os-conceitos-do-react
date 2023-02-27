import React from 'react'

import { ComponentProps } from '@stitches/react'

import Styled from './Icon.styles'

type IIconBaseProps = ComponentProps<typeof Styled.Root>
interface IIconProps extends IIconBaseProps {
  children: React.ReactNode
}

export function Icon(props: IIconProps) {
  const { children } = props

  return <Styled.Root {...props}>{children}</Styled.Root>
}
