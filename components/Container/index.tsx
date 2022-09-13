import { IContainer } from "./interface"
import * as Styled from "./styled"

const Container = ({ children }: IContainer) => (
  <Styled.Container>{children}</Styled.Container>
)

export default Container
