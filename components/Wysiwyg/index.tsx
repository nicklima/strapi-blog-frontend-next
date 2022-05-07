import rehypeRaw from "rehype-raw"
import * as Styled from "./styled"

const Wysiwyg = ({ content }: any) => {
  return <Styled.Wysiwyg rehypePlugins={[rehypeRaw]}>{content}</Styled.Wysiwyg>
}

export default Wysiwyg
