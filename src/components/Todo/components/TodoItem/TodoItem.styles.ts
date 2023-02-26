import * as RadixCheckbox from '@radix-ui/react-checkbox'

import { styled } from '../../../../styles'
import { Button as ButtonComponent } from '../../../Button'

const Button = styled(ButtonComponent, {
  minWidth: 32,
  width: 'fit-content',
  minHeight: 32,
  height: 'fit-content',
  fontSize: '$20',
  lineHeight: 0,
  padding: 0,
  transition: 'all 300ms ease-in-out',

  '&:hover, &:focus': {
    backgroundColor: '$gray400',
    color: '$danger',
    outline: 'none',
  },
})

const Root = styled('div', {
  display: 'flex',
  gap: 16,
  backgroundColor: '$gray500',
  padding: '1rem',
  borderRadius: 8,
  transition: 'all 300ms ease-in-out',

  [`.${Button.className}`]: {
    opacity: 0,
  },

  '&:hover': {
    filter: 'brightness(.9)',

    [`.${Button.className}`]: {
      opacity: 1,
    },
  },
})

const Checkbox = styled(RadixCheckbox.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  width: 32,
  maxWidth: 32,
  minWidth: 32,
  minHeight: 32,
  height: 32,
  borderRadius: 9999,
  border: '2px $blue solid',
  boxSizing: 'border-box',
  transition: 'all 300ms ease-in-out',

  '&[data-state="unchecked"]:hover, &[data-state="unchecked"]:focus': {
    backgroundColor: 'hsl(202deg, 68%, 37%, .2)',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$purpleDark',
    borderColor: '$purpleDark',
  },

  '&[data-state="checked"]:hover, &[data-state="checked"]:focus': {
    backgroundColor: '$purple',
    borderColor: '$purple',
  },

  '&[data-state="checked"] ~ label': {
    color: '$gray300',
    textDecoration: 'line-through',
  },
})

const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  color: '$gray100',
  fontSize: '$20',
  lineHeight: 0,
})

const CheckboxLabel = styled('label', {
  color: '$gray100',
  transition: 'color 300ms ease-in-out',
  cursor: 'pointer',
  width: '100%',
})

export default {
  Root,
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  Button,
}
