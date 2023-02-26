import Styled from './TextField.styles'

interface ITextFieldProps {
  placeholder: string
}

export function TextField(props: ITextFieldProps) {
  const { placeholder, ...rest } = props
  return <Styled.Root placeholder={placeholder} {...rest} />
}
