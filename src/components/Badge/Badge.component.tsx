import Styled from './Badge.styles'

interface IBadgeProps {
  children: React.ReactNode
}

export function Badge(props: IBadgeProps) {
  const { children } = props
  return <Styled.Root>{children}</Styled.Root>
}
