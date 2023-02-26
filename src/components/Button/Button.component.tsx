import React from 'react'

import { Typography } from '../Typography'
import Styled from './Button.styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  children?: React.ReactNode
  background?: 'transparent'
}

export function Button(props: IButtonProps) {
  const { children, icon, type = 'button', ...rest } = props

  return (
    <Styled.Button type={type} {...rest}>
      {icon && (
        <Styled.Icon css={{ marginRight: children ? 8 : 0 }}>
          {icon}
        </Styled.Icon>
      )}
      {children}
    </Styled.Button>
  )
}
