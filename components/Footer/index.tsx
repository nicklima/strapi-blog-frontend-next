import Image from "next/image"
import * as Styled from "./styled"

const Footer = () => {
  return (
    <Styled.Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Styled.Logo>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Styled.Logo>
      </a>
    </Styled.Footer>
  )
}
export default Footer
