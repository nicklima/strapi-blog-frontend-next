import { ITitle } from "./interface"
import * as Styled from "./styled"

const Title = ({ children, as }: ITitle) => (
  <Styled.Title as={as}>{children}</Styled.Title>
)

export default Title
