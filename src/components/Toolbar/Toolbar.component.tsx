import Styled from './Toolbar.styles'

interface IToolbarProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function Toolbar(props: IToolbarProps) {
  const { children } = props
  return <Styled.Root {...props}>{children}</Styled.Root>
}
