import Styled from './Toolbar.styles'

interface IToolbarProps {
  children: React.ReactNode
}

export function Toolbar(props: IToolbarProps) {
  const { children } = props
  return <Styled.Root>{children}</Styled.Root>
}
