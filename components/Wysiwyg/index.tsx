import * as Styled from "./styled"

const Wysiwyg = ({ content }: any) => {
  return <Styled.Wysiwyg source={content} escapeHtml={false} />
}

export default Wysiwyg
