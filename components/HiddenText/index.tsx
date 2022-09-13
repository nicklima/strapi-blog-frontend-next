import { IHiddenText } from "./interface"
import * as Styled from "./styled"

const HiddenText = ({ children }: IHiddenText) => (
  <Styled.HiddenText>{children}</Styled.HiddenText>
)

export default HiddenText
