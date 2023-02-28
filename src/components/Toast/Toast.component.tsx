import Styled from './Toast.styles'

export interface IToastProps {
  icon?: React.ReactNode
  title: string
  open: boolean
  variant?: 'success' | 'error' | 'info' | 'warning'
}

export function Toast(props: IToastProps) {
  const { icon, open, title, variant, ...rest } = props
  return (
    <>
      <Styled.Root open={open} variant={variant} {...rest}>
        <Styled.Title>
          {icon} {title}
        </Styled.Title>
      </Styled.Root>
      <Styled.Viewport />
    </>
  )
}
