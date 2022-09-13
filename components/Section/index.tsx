import { Container } from "components"
import { ISection } from "./interface"

import * as Styled from "./styled"

const Section = ({ children }: ISection) => (
  <Styled.Section>
    <Container>{children}</Container>
  </Styled.Section>
)

export default Section
