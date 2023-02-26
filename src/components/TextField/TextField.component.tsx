import Styled from './TextField.styles'

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function TextField(props: ITextFieldProps) {
  const { placeholder, ...rest } = props
  return <Styled.Root placeholder={placeholder} {...rest} />
}
