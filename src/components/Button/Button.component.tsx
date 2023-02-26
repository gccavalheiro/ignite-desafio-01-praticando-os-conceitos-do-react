import React from 'react'

import { Typography } from '../Typography'
import Styled from './Button.styles'

interface IButtonProps {
  icon?: React.ReactNode
  children?: React.ReactNode
  background?: 'transparent'
}

export function Button(props: IButtonProps) {
  const { children, icon } = props

  return (
    <Styled.Button type="button" {...props}>
      {icon && (
        <Styled.Icon css={{ marginRight: children ? 8 : 0 }}>
          {icon}
        </Styled.Icon>
      )}
      <Typography as="span" fontSize="16" fontWeight="bold" color="$gray100">
        {children}
      </Typography>
    </Styled.Button>
  )
}
